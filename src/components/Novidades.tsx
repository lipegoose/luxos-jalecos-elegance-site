
import React from 'react';
import ProductCard from './ProductCard';

const Novidades = () => {
  const newProducts = [
    {
      id: '5',
      name: 'Jaleco Modern White',
      description: 'Jaleco branco moderno com corte contemporâneo',
      price: 'R$ 359,90',
      image: '/lovable-uploads/cd41ff5f-15b1-4bf3-9fa9-7d23dd138c13.png',
      features: ['Lançamento', 'Corte moderno', 'Tecido premium'],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo5'
    },
    {
      id: '6',
      name: 'Jaleco Luxury Black',
      description: 'Jaleco preto de luxo com detalhes especiais',
      price: 'R$ 449,90',
      image: '/lovable-uploads/7c599a3d-6b22-44fd-a4fe-b54a962b12dd.png',
      features: ['Edição limitada', 'Detalhes dourados', 'Tecido importado'],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo6'
    },
    {
      id: '7',
      name: 'Jaleco Pearls White',
      description: 'Jaleco branco com detalhes em pérolas',
      price: 'R$ 399,90',
      image: '/lovable-uploads/aef4a17b-8549-44ca-9025-d523fadf1000.png',
      features: ['Detalhes em pérolas', 'Corte especial', 'Acabamento luxo'],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo7'
    },
    {
      id: '8',
      name: 'Jaleco Elegant Cream',
      description: 'Jaleco creme elegante com acabamento especial',
      price: 'R$ 329,90',
      image: '/lovable-uploads/f4865231-b9c4-48a7-a68e-131c6d15a640.png',
      features: ['Tom exclusivo', 'Acabamento especial', 'Conforto superior'],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo8'
    }
  ];

  return (
    <section id="novidades" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4 tracking-wide">
            NOVIDADES
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {newProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Novidades;
