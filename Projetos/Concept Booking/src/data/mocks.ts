import { Professional, Service } from '@/types';

export const SERVICES: Service[] = [
    {
        id: '1',
        name: 'Corte de Cabelo',
        description: 'Corte clássico ou moderno com máquina e tesoura.',
        price: 45.0,
        duration: 30,
        image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', // Haircut
    },
    {
        id: '2',
        name: 'Barba Completa',
        description: 'Modelagem de barba com toalha quente.',
        price: 35.0,
        duration: 30,
        image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', // Beard
    },
    {
        id: '3',
        name: 'Combo (Corte + Barba)',
        description: 'Experiência completa de visual.',
        price: 70.0,
        duration: 60,
        image: 'https://images.unsplash.com/photo-1503951914875-452162b7f30a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', // Combo
    },
    {
        id: '4',
        name: 'Pezinho / Acabamento',
        description: 'Manutenção rápida dos contornos.',
        price: 20.0,
        duration: 15,
        image: 'https://images.unsplash.com/photo-1599351431202-6e0c0a3d4731?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3', // Edging
    },
];

export const PROFESSIONALS: Professional[] = [
    {
        id: 'p1',
        name: 'João Silva',
        role: 'Master Barber',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        serviceIds: ['1', '2', '3', '4'],
    },
    {
        id: 'p2',
        name: 'Carlos Oliveira',
        role: 'Barbeiro Sênior',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
        serviceIds: ['1', '2'], // Doesn't do Combo
    },
    {
        id: 'p3',
        name: 'Marcos Santos',
        role: 'Especialista em Barba',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jude',
        serviceIds: ['2', '4'],
    },
];
