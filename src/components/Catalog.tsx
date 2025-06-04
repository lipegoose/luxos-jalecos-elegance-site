
import React from 'react';
import ProductCard from './ProductCard';

const Catalog = () => {
  const products = [
    {
      id: '1',
      name: 'Jaleco Elegance',
      description: 'Jaleco feminino com corte anatômico, detalhes em crochê artesanal e pingente personalizado em dourado. Confeccionado em tecido premium de alta durabilidade.',
      price: 'R$ 289,90',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=500',
      features: [
        'Acabamento em crochê exclusivo',
        'Pingente personalizado',
        'Tecido premium anti-manchas',
        'Corte anatômico feminino',
        'Disponível em várias cores'
      ],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo1'
    },
    {
      id: '2',
      name: 'Jaleco Sophistique',
      description: 'Modelo sofisticado com bordados delicados e acabamentos únicos. Ideal para profissionais que buscam diferenciação e elegância no ambiente de trabalho.',
      price: 'R$ 349,90',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=500',
      features: [
        'Bordados artesanais',
        'Tecido antibacteriano',
        'Design exclusivo',
        'Ajuste personalizado',
        'Garantia de qualidade'
      ],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo2'
    },
    {
      id: '3',
      name: 'Jaleco Royal',
      description: 'Nossa criação mais exclusiva, com detalhes em pedrarias discretas e acabamento impecável. Para profissionais que não abrem mão do luxo e conforto.',
      price: 'R$ 429,90',
      image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&q=80&w=500',
      features: [
        'Detalhes em pedrarias',
        'Tecido premium importado',
        'Modelagem exclusiva',
        'Embalagem de presente',
        'Certificado de autenticidade'
      ],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo3'
    },
    {
      id: '4',
      name: 'Jaleco Classic',
      description: 'Modelo clássico reinventado com toques modernos e funcionais. Perfeito equilíbrio entre tradição e inovação para o dia a dia profissional.',
      price: 'R$ 239,90',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=500',
      features: [
        'Design atemporal',
        'Bolsos funcionais',
        'Fácil manutenção',
        'Conforto prolongado',
        'Variedade de tamanhos'
      ],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo4'
    }
  ];

  return (
    <section id="catalog" className="py-20 bg-luxo-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxo-blue mb-6 font-serif">
            Nosso Catálogo <span className="text-gradient-gold">Exclusivo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada jaleco é uma obra de arte, criada especialmente para profissionais que valorizam 
            a elegância e a qualidade em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-luxo-blue mb-4 font-serif">
              Não encontrou o que procurava?
            </h3>
            <p className="text-gray-600 mb-6">
              Criamos peças personalizadas especialmente para você. Entre em contato e vamos desenvolver juntos o jaleco dos seus sonhos.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de encomendar um jaleco personalizado.', '_blank')}
              className="bg-gradient-gold text-luxo-blue-dark hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Solicitar Personalização
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
