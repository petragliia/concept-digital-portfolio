import { getAvailableSlots } from '../src/lib/availability';
import { Appointment, Professional } from '../src/types/scheduling';
import { DEFAULT_BUSINESS_HOURS } from '../src/lib/mock-data';

// Color helpers for output
const green = (msg: string) => `\x1b[32m${msg}\x1b[0m`;
const red = (msg: string) => `\x1b[31m${msg}\x1b[0m`;
const bold = (msg: string) => `\x1b[1m${msg}\x1b[0m`;

function runTest(name: string, assertion: () => boolean) {
    process.stdout.write(`Testing: ${name.padEnd(60)} `);
    try {
        if (assertion()) {
            console.log(green("PASS"));
        } else {
            console.log(red("FAIL"));
        }
    } catch (e) {
        console.log(red("ERROR"));
        console.error(e);
    }
}

async function verifyLogic() {
    console.log(bold("\n--- Verifying Concept Booking Core Logic ---\n"));

    const professional: Professional = {
        id: "test-pro",
        name: "Tester",
        role: "Tester",
        businessHours: DEFAULT_BUSINESS_HOURS
    };

    // MOCK DATE: 2026-02-02 is a Monday (Open 09:00-12:00, 13:00-18:00)
    const mondayDate = "2026-02-02";

    // TEST 1: Basic Availability
    // Service 30 min. Should find 09:00, 09:30, 10:00...
    runTest("Should generate slots for a regular open day", () => {
        const slots = getAvailableSlots(mondayDate, professional, 30, []);
        return slots.includes("09:00") && slots.includes("09:30") && slots.length > 0;
    });

    // TEST 2: Conflict Detection
    // Add appointment at 09:00 - 09:30. Slot 09:00 should disappear.
    const conflictAppt: Appointment = {
        id: "1", professionalId: "test-pro", serviceId: "s1",
        date: mondayDate, startTime: "09:00", endTime: "09:30", status: "CONFIRMED"
    };

    runTest("Should remove slot overlapping with existing appointment", () => {
        const slots = getAvailableSlots(mondayDate, professional, 30, [conflictAppt]);
        return !slots.includes("09:00") && slots.includes("09:30");
    });

    // TEST 3: Lunch Break Logic
    // Shift is 09-12 and 13-18. 12:00 and 12:30 should NOT exist.
    runTest("Should NOT generate slots during lunch break (gap between shifts)", () => {
        const slots = getAvailableSlots(mondayDate, professional, 30, []);
        return !slots.includes("12:00") && !slots.includes("12:30");
    });

    // TEST 4: Service Duration Overflow
    // If shift ends at 12:00, a 45min service cannot start at 11:30 (ends 12:15).
    runTest("Should NOT offer slot if service duration exceeds shift end", () => {
        // 11:30 is valid for 30min (ends 12:00), but INVALID for 45min (ends 12:15)

        // Check 30 min service
        const slots30 = getAvailableSlots(mondayDate, professional, 30, []);
        const has1130_for_30 = slots30.includes("11:30");

        // Check 45 min service
        const slots45 = getAvailableSlots(mondayDate, professional, 45, []);
        const has1130_for_45 = slots45.includes("11:30");

        return has1130_for_30 === true && has1130_for_45 === false;
    });

    // TEST 5: Closed Day
    // Sunday (2026-02-01) is closed.
    runTest("Should return NO slots for closed day (Sunday)", () => {
        const sundayDate = "2026-02-01";
        const slots = getAvailableSlots(sundayDate, professional, 30, []);
        return slots.length === 0;
    });

    console.log("\n");
}

verifyLogic();
