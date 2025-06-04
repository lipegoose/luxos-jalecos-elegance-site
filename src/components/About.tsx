
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-luxo-blue mb-8 font-serif">
              A História da <span className="text-gradient-gold">Luxo's</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                A <strong className="text-luxo-blue">Luxo's Jalecos</strong> nasceu da paixão por criar peças únicas 
                que combinam funcionalidade e elegância. Nossa missão é transformar o uniforme profissional 
                em uma expressão de personalidade e sofisticação.
              </p>
              
              <p>
                Cada jaleco é confeccionado artesanalmente, com atenção especial aos detalhes que fazem a diferença: 
                desde os delicados trabalhos em crochê até os pingentes personalizados que tornam cada peça única.
              </p>
              
              <p>
                Utilizamos apenas <strong className="text-luxo-blue">tecidos premium</strong> selecionados, 
                garantindo durabilidade, conforto e facilidade na manutenção. Nosso processo produtivo é 
                totalmente artesanal, respeitando o tempo necessário para criar uma peça de qualidade excepcional.
              </p>
            </div>

            {/* Diferenciais */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-luxo-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-luxo-blue mb-1">Acabamento Artesanal</h4>
                  <p className="text-sm text-gray-600">Crochê e bordados feitos à mão</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-luxo-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-luxo-blue mb-1">Personalização Única</h4>
                  <p className="text-sm text-gray-600">Pingentes e detalhes exclusivos</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-luxo-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-luxo-blue mb-1">Tecidos Premium</h4>
                  <p className="text-sm text-gray-600">Seleção criteriosa de materiais</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-luxo-gold rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-luxo-blue mb-1">Qualidade Garantida</h4>
                  <p className="text-sm text-gray-600">Compromisso com a excelência</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800" 
                alt="Atelier Luxo's Jalecos"
                className="w-full h-96 lg:h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-gold rounded-full opacity-80 animate-float"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-luxo-blue rounded-full opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-luxo-blue mb-2 font-serif">500+</div>
            <div className="text-gray-600">Jalecos Criados</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-luxo-blue mb-2 font-serif">3</div>
            <div className="text-gray-600">Anos de Experiência</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-luxo-blue mb-2 font-serif">100%</div>
            <div className="text-gray-600">Feito à Mão</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-luxo-blue mb-2 font-serif">⭐⭐⭐⭐⭐</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
