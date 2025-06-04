
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative h-[70vh] bg-gradient-to-r from-amber-50 to-stone-100 rounded-lg overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200" 
              alt="Jaleco Luxo's"
              className="w-full h-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-lg ml-8 md:ml-16">
              <p className="text-sm uppercase tracking-wider text-gray-600 mb-4 font-medium">
                LANÇAMENTO
              </p>
              
              <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
                preciosite
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 font-light">
                Uma coleção que vai <em>além da moda</em>.
              </p>

              <Button 
                onClick={() => scrollToSection('catalog')}
                className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 px-8 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300"
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>

        {/* Product Grid Preview */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
              BEST SELLERS
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      item === 1 ? '1576091160399-112ba8d25d1f' :
                      item === 2 ? '1559757148-5c350d0d3c56' :
                      item === 3 ? '1612277795421-9bc7706a4a34' :
                      '1551601651-2a8555f1a136'
                    }?auto=format&fit=crop&q=80&w=400`}
                    alt={`Jaleco ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800 mb-1">Jaleco Luxo's {item}</h3>
                <p className="text-sm text-gray-600">R$ {189 + (item * 50)},90</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
