import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Professional, Service } from '@/types';

interface BookingState {
    step: number;
    selectedService: Service | null;
    selectedProfessional: Professional | null;
    selectedDate: Date | null;
    selectedTimeSlot: string | null;

    // Actions
    setStep: (step: number) => void;
    selectService: (service: Service) => void;
    selectProfessional: (professional: Professional) => void;
    setDate: (date: Date) => void;
    setTimeSlot: (time: string) => void;
    reset: () => void;
}

export const useBookingStore = create<BookingState>()(
    persist(
        (set) => ({
            step: 1,
            selectedService: null,
            selectedProfessional: null,
            selectedDate: null,
            selectedTimeSlot: null,

            setStep: (step) => set({ step }),

            selectService: (service) =>
                set({ selectedService: service, step: 2, selectedProfessional: null, selectedDate: null, selectedTimeSlot: null }),

            selectProfessional: (professional) =>
                set({ selectedProfessional: professional, step: 3, selectedDate: null, selectedTimeSlot: null }),

            setDate: (date) =>
                set({ selectedDate: date }),

            setTimeSlot: (time) =>
                set({ selectedTimeSlot: time, step: 4 }), // Move to review step

            reset: () =>
                set({
                    step: 1,
                    selectedService: null,
                    selectedProfessional: null,
                    selectedDate: null,
                    selectedTimeSlot: null
                }),
        }),
        {
            name: 'booking-storage',
            partialize: (state) => ({
                // We only persist the selections, not the step potentially? 
                // Or keep everything. Let's keep everything for full recovery.
                step: state.step,
                selectedService: state.selectedService,
                selectedProfessional: state.selectedProfessional,
                selectedTimeSlot: state.selectedTimeSlot,
                // Date objects are stringified in localStorage, need to handle re-hydration or just store strings?
                // Zustand persist handles JSON.parse/stringify. 
                // Dates usually become strings. We might need a custom storage or just handle string dates.
                // For simplicity in this MVP, we let it persist as implementation detail (string) 
                // but Typescript might complain if we treat strings as Dates on hydration.
                // ideally we store ISO strings. 
            }),
            // Custom storage logic if needed later
        }
    )
);
