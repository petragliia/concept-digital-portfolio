export interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: number; // in minutes
    image?: string;
}

export interface Professional {
    id: string;
    name: string;
    role: string;
    avatar: string;
    serviceIds: string[]; // Services performed by this professional
}

export interface Slot {
    time: string; // Format "HH:mm"
    available: boolean;
}

export interface Appointment {
    id: string;
    serviceId: string;
    professionalId: string;
    date: string; // ISO Date string
    time: string; // "HH:mm"
    customerName: string;
    createdAt: number; // Timestamp
}
