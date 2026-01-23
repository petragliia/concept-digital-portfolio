import { BusinessHours, Professional, Service } from "@/types/scheduling";

export const DEFAULT_BUSINESS_HOURS: BusinessHours = {
    MONDAY: { isOpen: true, shifts: [{ start: "09:00", end: "12:00" }, { start: "13:00", end: "18:00" }] },
    TUESDAY: { isOpen: true, shifts: [{ start: "09:00", end: "12:00" }, { start: "13:00", end: "18:00" }] },
    WEDNESDAY: { isOpen: true, shifts: [{ start: "09:00", end: "12:00" }, { start: "13:00", end: "18:00" }] },
    THURSDAY: { isOpen: true, shifts: [{ start: "09:00", end: "12:00" }, { start: "13:00", end: "18:00" }] },
    FRIDAY: { isOpen: true, shifts: [{ start: "09:00", end: "12:00" }, { start: "13:00", end: "17:00" }] }, // Friday closes early
    SATURDAY: { isOpen: true, shifts: [{ start: "10:00", end: "14:00" }] },
    SUNDAY: { isOpen: false, shifts: [] },
};

export const MOCK_SERVICES: Service[] = [
    { id: "s1", name: "Corte de Cabelo Premium", durationMin: 45, price: 80, description: "Corte completo com lavagem e finalização." },
    { id: "s2", name: "Barba Terapia", durationMin: 30, price: 50, description: "Modelagem de barba com toalha quente." },
    { id: "s3", name: "Combo Concept (Corte + Barba)", durationMin: 75, price: 110, description: "A experiência completa." },
];

export const MOCK_PROFESSIONALS: Professional[] = [
    {
        id: "p1",
        name: "Alex Silva",
        role: "Master Barber",
        businessHours: DEFAULT_BUSINESS_HOURS
    },
    {
        id: "p2",
        name: "Bruno Costa",
        role: "Senior Barber",
        businessHours: {
            ...DEFAULT_BUSINESS_HOURS,
            MONDAY: { isOpen: false, shifts: [] }, // Folga segunda
            SATURDAY: { isOpen: true, shifts: [{ start: "09:00", end: "15:00" }] } // Sábado estendido
        }
    },
];
