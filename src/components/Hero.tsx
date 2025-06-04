
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border border-luxo-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-luxo-gold rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 border border-luxo-gold rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 border border-luxo-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo Principal */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/d6746f67-dba9-4a30-855f-d822054b4569.png" 
              alt="Luxo's Jalecos" 
              className="h-32 md:h-40 w-auto mx-auto mb-6"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Elegância e <span className="text-gradient-gold">Sofisticação</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-luxo-gold-light mb-8 animate-fade-in font-light">
            Jalecos personalizados com acabamento artesanal exclusivo
          </p>

          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed">
            Cada peça é única, confeccionada com detalhes em crochê e pingentes personalizados. 
            Transforme seu uniforme em uma expressão de estilo e profissionalismo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection('catalog')}
              className="bg-gradient-gold text-luxo-blue-dark hover:shadow-lg transform hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold"
            >
              Ver Catálogo
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('about')}
              className="border-luxo-gold text-luxo-gold hover:bg-luxo-gold hover:text-luxo-blue-dark transition-all duration-300 px-8 py-3 text-lg"
            >
              Conheça Nossa História
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-luxo-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-luxo-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
