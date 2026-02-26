'use client';

import { ProductCard } from './ProductCard';
import { products } from '@/data/products';

export function Catalog() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="produtos">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold font-quicksand text-gray-800">
                    Nossos Produtos
                </h2>
                <p className="text-gray-500 font-nunito text-lg max-w-2xl mx-auto">
                    Desenvolvidos com carinho para cada fase do seu pequeno. Escolha o melhor para o conforto dele.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
