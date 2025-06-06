
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/bc79764a-5435-4836-98c2-797e3b041fed.png" 
                alt="Sobre a Luxo's"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="text-left space-y-6">
              <h2 className="text-3xl font-light text-gray-800 mb-8 tracking-wide">
                SOBRE A LUXO'S
              </h2>
              
              <p className="text-gray-600 leading-relaxed">
                A <strong>Luxo's Jalecos</strong> nasceu da paixão por criar peças únicas 
                que combinam funcionalidade e elegância. Nossa missão é transformar o uniforme profissional 
                em uma expressão de personalidade e sofisticação.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Cada jaleco é confeccionado artesanalmente, com atenção especial aos detalhes que fazem a diferença: 
                desde os delicados trabalhos em acabamentos especiais até os detalhes dourados que tornam cada peça única.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-light text-luxo-blue mb-2">500+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Jalecos Criados</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-luxo-blue mb-2">100%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Artesanal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
