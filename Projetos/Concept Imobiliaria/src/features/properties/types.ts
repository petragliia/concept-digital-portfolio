export interface Property {
    id: string;
    title: string;
    price: string;
    location: string;
    image: string;
    specs: {
        icon: "bed" | "maximize" | "car" | "waves" | "trees";
        label: string;
    }[];
    badge?: string;
    badgeColor?: "primary" | "secondary";
}
