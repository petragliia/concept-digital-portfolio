export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    size: 'P' | 'M' | 'G' | 'XG' | 'XXG';
    count: number;
    bestSeller?: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Kit SoftCloud Recém-Nascido",
        description: "Proteção delicada para os primeiros dias. Toque de algodão e ajuste suave.",
        price: 49.90,
        image: "/product-newborn.png",
        size: 'P',
        count: 36,
        bestSeller: true
    },
    {
        id: 2,
        name: "Fralda SoftCloud M - Pacote Mensal",
        description: "Liberdade de movimento para o bebê que começa a descobrir o mundo.",
        price: 129.90,
        image: "/product-m.png",
        size: 'M',
        count: 148,
        bestSeller: true
    },
    {
        id: 3,
        name: "Fralda SoftCloud G - Proteção Total",
        description: "Absorção máxima para noites inteiras de sono sem vazamentos.",
        price: 89.90,
        image: "/product-g.png",
        size: 'G',
        count: 80
    },
    {
        id: 4,
        name: "Kit SoftCloud XG - Conforto Ativo",
        description: "Para bebês maiores que não param quietos. Cintura elástica 360º.",
        price: 94.90,
        image: "/product-xg.png",
        size: 'XG',
        count: 72
    },
    {
        id: 5,
        name: "Fralda Calça XXG - Praticidade",
        description: "Fácil de vestir e tirar, ideal para o desfralde.",
        price: 59.90,
        image: "/product-xxg.png",
        size: 'XXG',
        count: 40
    },
    {
        id: 6,
        name: "Toalhas Umedecidas SoftClean",
        description: "99% água, sem fragrância e hipoalergênicas. Pacote com 4 unidades.",
        price: 39.90,
        image: "/product-wipes.png",
        size: 'M', // Generic size for wipes
        count: 192, // 4 x 48
        bestSeller: true
    }
];
