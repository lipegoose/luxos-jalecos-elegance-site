
import React from 'react';
import ProductCard from './ProductCard';

const Featured = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Jaleco Elegance White',
      description: 'Jaleco branco clássico com detalhes dourados exclusivos',
      price: 'R$ 289,90',
      image: '/lovable-uploads/bc79764a-5435-4836-98c2-797e3b041fed.png',
      features: ['Acabamento premium', 'Botões dourados', 'Corte anatômico'],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo1'
    },
    {
      id: '2',
      name: 'Jaleco Sophistique',
      description: 'Modelo sofisticado com acabamentos únicos',
      price: 'R$ 349,90',
      image: '/lovable-uploads/eaf53d67-ec0f-4191-a8fd-7239c355e8e7.png',
      features: ['Design exclusivo', 'Tecido premium', 'Detalhes artesanais'],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo2'
    },
    {
      id: '3',
      name: 'Jaleco Royal Black',
      description: 'Jaleco preto de luxo com zíper dourado',
      price: 'R$ 429,90',
      image: '/lovable-uploads/7393c34f-1359-4e2f-b3f2-d8873ada7ea3.png',
      features: ['Zíper dourado', 'Corte especial', 'Tecido importado'],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo3'
    },
    {
      id: '4',
      name: 'Jaleco Classic Style',
      description: 'Estilo clássico reinventado com elegância',
      price: 'R$ 319,90',
      image: '/lovable-uploads/bd152ced-da3b-49c7-a93c-33134f8f9cb5.png',
      features: ['Estilo atemporal', 'Conforto superior', 'Acabamento perfeito'],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo4'
    }
  ];

  return (
    <section id="featured" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4 tracking-wide">
            EM DESTAQUE
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
