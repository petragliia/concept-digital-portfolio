'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/Button';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group"
        >
            <div className="relative h-64 p-4 bg-white/50 flex items-center justify-center overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {product.bestSeller && (
                    <span className="absolute top-4 left-4 bg-soft-orange text-orange-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        Mais Vendido
                    </span>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="flex-grow space-y-2">
                    <h3 className="font-quicksand font-bold text-lg text-gray-800 leading-tight">
                        {product.name}
                    </h3>
                    <p className="font-nunito text-sm text-gray-500 line-clamp-2">
                        {product.description}
                    </p>
                    <div className="flex gap-2 text-xs font-semibold text-brand-purple/80">
                        <span className="bg-brand-purple/5 px-2 py-1 rounded">Tamanho {product.size}</span>
                        <span className="bg-brand-purple/5 px-2 py-1 rounded">{product.count} unidades</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-brand-purple">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                    <Button
                        size="sm"
                        className="rounded-xl px-4"
                        onClick={() => addToCart(product)}
                        aria-label={`Adicionar ${product.name} ao carrinho`}
                    >
                        <ShoppingCart size={18} />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
