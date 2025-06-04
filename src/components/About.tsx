
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-8">
            SOBRE A LUXO'S
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-gray-600 leading-relaxed">
                A <strong>Luxo's Jalecos</strong> nasceu da paixão por criar peças únicas 
                que combinam funcionalidade e elegância. Nossa missão é transformar o uniforme profissional 
                em uma expressão de personalidade e sofisticação.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Cada jaleco é confeccionado artesanalmente, com atenção especial aos detalhes que fazem a diferença: 
                desde os delicados trabalhos em crochê até os pingentes personalizados que tornam cada peça única.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4">
                  <div className="text-2xl font-light text-luxo-blue mb-2">500+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Jalecos Criados</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-light text-luxo-blue mb-2">100%</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Feito à Mão</div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=600" 
                alt="Atelier Luxo's Jalecos"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
