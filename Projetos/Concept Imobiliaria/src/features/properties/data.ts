import { Property } from "./types";

export const PROPERTIES: Property[] = [
    {
        id: "1",
        title: "Mansão Jardins",
        price: "Sob Consulta",
        location: "Jardins, São Paulo",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop",
        badge: "Exclusivo",
        badgeColor: "primary",
        specs: [
            { icon: "bed", label: "4 Suítes" },
            { icon: "maximize", label: "850m²" },
            { icon: "car", label: "6 Vagas" },
        ],
    },
    {
        id: "2",
        title: "Penthouse Ocean",
        price: "R$ 12.500.000",
        location: "Leblon, Rio de Janeiro",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
        badge: "Novo",
        badgeColor: "secondary",
        specs: [
            { icon: "bed", label: "3 Suítes" },
            { icon: "maximize", label: "420m²" },
            { icon: "waves", label: "Vista Mar" }, // Note: 'waves' might need custom icon or mapping
        ],
    },
    {
        id: "3",
        title: "Fazenda Boa Vista",
        price: "Sob Consulta",
        location: "Porto Feliz, SP",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
        badge: undefined,
        specs: [
            { icon: "bed", label: "6 Suítes" },
            { icon: "maximize", label: "2.500m²" },
            { icon: "trees", label: "Natureza" }, // Note: 'trees' might need custom icon
        ],
    },
];
