import { Appointment, Professional, WeekDay } from "@/types/scheduling";
import { addMinutes, format, parse, isBefore, isAfter, isEqual, getDay, parseISO } from "date-fns";

// Helper to convert internal weekday to our type
export function getWeekDay(date: Date): WeekDay {
    const days: WeekDay[] = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    return days[getDay(date)];
}

/**
 * Checks if a specific time range overlaps with any existing appointment.
 */
function isOverlapping(
    start: Date,
    end: Date,
    appointments: Appointment[]
): boolean {
    return appointments.some((appt) => {
        // Parse appointment times
        // Assuming appt.date is YYYY-MM-DD
        const apptStart = parse(`${appt.date} ${appt.startTime}`, 'yyyy-MM-dd HH:mm', new Date());
        const apptEnd = parse(`${appt.date} ${appt.endTime}`, 'yyyy-MM-dd HH:mm', new Date());

        // Standard overlap check: (StartA < EndB) and (EndA > StartB)
        return isBefore(start, apptEnd) && isAfter(end, apptStart);
    });
}

/**
 * Generates available start times (e.g., "09:00", "09:30") for a given day.
 */
export function getAvailableSlots(
    dateStr: string, // YYYY-MM-DD
    professional: Professional,
    serviceDurationMin: number,
    existingAppointments: Appointment[] = [] // Appointments for this professional on this day
): string[] {
    const date = parseISO(dateStr);
    const weekDay = getWeekDay(date);
    const schedule = professional.businessHours[weekDay];

    if (!schedule || !schedule.isOpen || !schedule.shifts) {
        return [];
    }

    const availableSlots: string[] = [];
    const slotInterval = 30; // Granularity of slots

    schedule.shifts.forEach((shift) => {
        // Parse shift boundaries for the specific date
        let currentTime = parse(`${dateStr} ${shift.start}`, 'yyyy-MM-dd HH:mm', new Date());
        const shiftEnd = parse(`${dateStr} ${shift.end}`, 'yyyy-MM-dd HH:mm', new Date());

        // Iterate through the shift
        while (isBefore(currentTime, shiftEnd)) {
            const slotEnd = addMinutes(currentTime, serviceDurationMin);

            // Check if the service fits within the shift
            if (isAfter(slotEnd, shiftEnd)) {
                break; // Stop if service exceeds shift end
            }

            // Check for conflicts
            if (!isOverlapping(currentTime, slotEnd, existingAppointments)) {
                availableSlots.push(format(currentTime, 'HH:mm'));
            }

            // Move to next slot
            currentTime = addMinutes(currentTime, slotInterval);
        }
    });

    return availableSlots;
}
