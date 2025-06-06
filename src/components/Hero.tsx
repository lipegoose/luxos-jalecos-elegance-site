
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
        <div className="relative h-[80vh] bg-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/bc79764a-5435-4836-98c2-797e3b041fed.png" 
              alt="Luxo's Jalecos"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
                LUXO'S
              </h1>
              
              <p className="text-xl md:text-2xl font-light mb-2 tracking-wide">
                JALECOS FEMININOS
              </p>
              
              <p className="text-lg font-light mb-8 opacity-90">
                Elegância e sofisticação em cada detalhe
              </p>

              <Button 
                onClick={() => scrollToSection('featured')}
                className="bg-white text-luxo-blue hover:bg-gray-100 px-8 py-3 text-sm font-medium tracking-wider"
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
