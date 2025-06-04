
import React from 'react';
import ProductCard from './ProductCard';

const Catalog = () => {
  const products = [
    {
      id: '1',
      name: 'Jaleco Elegance',
      description: 'Jaleco feminino com corte anatômico e detalhes exclusivos em crochê artesanal.',
      price: 'R$ 289,90',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=500',
      features: [
        'Acabamento em crochê exclusivo',
        'Pingente personalizado',
        'Tecido premium anti-manchas',
        'Corte anatômico feminino'
      ],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo1'
    },
    {
      id: '2',
      name: 'Jaleco Sophistique',
      description: 'Modelo sofisticado com bordados delicados e acabamentos únicos.',
      price: 'R$ 349,90',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=500',
      features: [
        'Bordados artesanais',
        'Tecido antibacteriano',
        'Design exclusivo',
        'Ajuste personalizado'
      ],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo2'
    },
    {
      id: '3',
      name: 'Jaleco Royal',
      description: 'Nossa criação mais exclusiva, com detalhes em pedrarias discretas.',
      price: 'R$ 429,90',
      image: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?auto=format&fit=crop&q=80&w=500',
      features: [
        'Detalhes em pedrarias',
        'Tecido premium importado',
        'Modelagem exclusiva',
        'Embalagem de presente'
      ],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo3'
    },
    {
      id: '4',
      name: 'Jaleco Classic',
      description: 'Modelo clássico reinventado com toques modernos e funcionais.',
      price: 'R$ 239,90',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=500',
      features: [
        'Design atemporal',
        'Bolsos funcionais',
        'Fácil manutenção',
        'Conforto prolongado'
      ],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo4'
    },
    {
      id: '5',
      name: 'Jaleco Premium',
      description: 'Jaleco de linha premium com acabamentos especiais.',
      price: 'R$ 379,90',
      image: 'https://images.unsplash.com/photo-1594824047471-2ad1c6b0d1cf?auto=format&fit=crop&q=80&w=500',
      features: [
        'Tecido premium',
        'Acabamento diferenciado',
        'Corte especial',
        'Detalhes únicos'
      ],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo5'
    },
    {
      id: '6',
      name: 'Jaleco Deluxe',
      description: 'Modelo deluxe para profissionais exigentes.',
      price: 'R$ 459,90',
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=500',
      features: [
        'Linha deluxe',
        'Materiais importados',
        'Design exclusivo',
        'Acabamento artesanal'
      ],
      paymentLink: 'https://pagbank.com.br/checkout/exemplo6'
    }
  ];

  return (
    <section id="catalog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            JALECOS FEMININOS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra nossa coleção exclusiva de jalecos personalizados, 
            criados especialmente para profissionais que valorizam elegância e qualidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Section for more products */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-light text-gray-800 mb-8">
            ELAS USAM
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${
                    item === 1 ? '1559839734-2b71ea197ec2' :
                    item === 2 ? '1594824047471-2ad1c6b0d1cf' :
                    item === 3 ? '1612349317150-e413f6a5b16d' :
                    '1582750433449-648ed127bb54'
                  }?auto=format&fit=crop&q=80&w=400`}
                  alt={`Cliente ${item}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
