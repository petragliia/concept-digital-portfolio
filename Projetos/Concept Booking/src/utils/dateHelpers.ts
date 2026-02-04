import { addMinutes, format, isBefore, isSameDay, parse, set, startOfToday } from 'date-fns';
import { Appointment, Slot } from '@/types';

// Business Rules Configuration
const BUSINESS_START_HOUR = 9;
const BUSINESS_END_HOUR = 18;
const SLOT_INTERVAL_MINUTES = 30;

/**
 * Generates available time slots for a given date and service duration.
 * Enforces business hours (09:00 - 18:00) and prevents past times.
 */
export const generateTimeSlots = (
    date: Date,
    serviceDuration: number = 30,
    existingAppointments: Appointment[] = []
): Slot[] => {
    const slots: Slot[] = [];
    const now = new Date();

    // Start at 09:00 of the selected date
    let currentTime = set(date, { hours: BUSINESS_START_HOUR, minutes: 0, seconds: 0 });

    // Define end of day (18:00)
    const endTime = set(date, { hours: BUSINESS_END_HOUR, minutes: 0, seconds: 0 });

    while (isBefore(currentTime, endTime)) {
        const timeString = format(currentTime, 'HH:mm');

        // Check constraints
        const isPast = isSameDay(date, now) && isBefore(currentTime, now);

        // Check availability (Mock database check)
        // In a real app, this would check overlapping ranges.
        // Here we check if the start time is already taken.
        const isTaken = existingAppointments.some(
            (appt) => isSameDay(new Date(appt.date), date) && appt.time === timeString
        );

        // Additional check: Does the service duration fit within business hours?
        const serviceEndTime = addMinutes(currentTime, serviceDuration);
        const exceedsBusinessHours = isBefore(endTime, serviceEndTime);

        slots.push({
            time: timeString,
            available: !isPast && !isTaken && !exceedsBusinessHours,
        });

        currentTime = addMinutes(currentTime, SLOT_INTERVAL_MINUTES);
    }

    return slots;
};

/**
 * Formats a Date object to a user-friendly string (e.g., "Segunda-feira, 03/02")
 */
export const formatDateFriendly = (date: Date): string => {
    return format(date, "EEEE, dd/MM");
};

/**
 * Checks if a date is in the past (before today).
 * Used to disable dates in the calendar.
 */
export const isPastDate = (date: Date): boolean => {
    return isBefore(date, startOfToday());
};

/**
 * Checks if a date is a Sunday (Day 0).
 */
export const isSunday = (date: Date): boolean => {
    return date.getDay() === 0;
};

/**
 * Formats a Date object to Google Calendar ISO format (YYYYMMDDTHHMMSSZ).
 */
export const formatToGoogleDate = (date: Date): string => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
};

/**
 * Generates a Google Calendar Event Link.
 */
export const generateGoogleCalendarLink = (
    serviceName: string,
    professionalName: string,
    dateString: string, // ISO string from store
    timeString: string, // "HH:mm"
    durationMinutes: number
): string => {
    const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
    const title = encodeURIComponent(`Agendamento: ${serviceName}`);

    // Construct Start Date
    const [hours, minutes] = timeString.split(':').map(Number);
    const startDate = new Date(dateString);
    startDate.setHours(hours, minutes, 0, 0);

    // Construct End Date
    const endDate = addMinutes(startDate, durationMinutes);

    const startISO = formatToGoogleDate(startDate);
    const endISO = formatToGoogleDate(endDate);

    const details = encodeURIComponent(`Profissional: ${professionalName}`);
    const location = encodeURIComponent("Concept Booking");

    return `${baseUrl}&text=${title}&dates=${startISO}/${endISO}&details=${details}&location=${location}`;
};
