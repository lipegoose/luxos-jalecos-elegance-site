import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const Novidades = () => {
  return (
    <section id="novidades" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4 tracking-wide">
            NOVIDADES
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products
            .filter(product => product.novidades)
            .map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Novidades;
