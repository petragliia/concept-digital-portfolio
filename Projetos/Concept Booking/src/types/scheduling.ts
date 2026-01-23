export type WeekDay = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

export interface Shift {
  start: string; // "09:00"
  end: string;   // "12:00"
}

export interface DaySchedule {
  isOpen: boolean;
  shifts: Shift[];
}

// Partial to allow missing days (implied closed)
export type BusinessHours = Partial<Record<WeekDay, DaySchedule>>;

export interface Professional {
  id: string;
  name: string;
  role: string;
  photoUrl?: string; // Optional URL
  businessHours: BusinessHours;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  durationMin: number;
  price: number;
}

export interface Appointment {
  id: string;
  professionalId: string;
  serviceId: string;
  date: string; // YYYY-MM-DD
  startTime: string; // "14:00"
  endTime: string;   // "14:45"
  clientName?: string;
  status: 'CONFIRMED' | 'PENDING' | 'CANCELLED';
}
