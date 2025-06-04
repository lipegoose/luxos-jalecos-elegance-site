
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dra. Marina Santos",
      profession: "Dermatologista",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100",
      text: "O jaleco da Luxo's transformou completamente minha apresentação profissional. Os detalhes em crochê são únicos e recebo elogios constantemente. Qualidade excepcional!",
      rating: 5
    },
    {
      id: 2,
      name: "Paula Oliveira",
      profession: "Esteticista",
      image: "https://images.unsplash.com/photo-1594824047471-2ad1c6b0d1cf?auto=format&fit=crop&q=80&w=100",
      text: "Nunca pensei que um jaleco pudesse ser tão elegante! O acabamento é impecável e o conforto durante o trabalho é incomparável. Recomendo de olhos fechados.",
      rating: 5
    },
    {
      id: 3,
      name: "Dra. Ana Carolina",
      profession: "Dentista",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100",
      text: "A personalização do pingente foi o toque especial que eu procurava. Meus pacientes sempre comentam sobre a beleza do meu jaleco. É realmente diferenciado!",
      rating: 5
    },
    {
      id: 4,
      name: "Carla Mendes",
      profession: "Enfermeira",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=100",
      text: "Trabalho 12 horas por dia e o conforto do jaleco Luxo's é incomparável. Além disso, me sinto mais confiante e profissional. Valeu cada centavo!",
      rating: 5
    },
    {
      id: 5,
      name: "Dra. Beatriz Lima",
      profession: "Fisioterapeuta",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=100",
      text: "O atendimento personalizado e a qualidade dos materiais me impressionaram. Já encomendei meu segundo jaleco e pretendo ser cliente para sempre!",
      rating: 5
    },
    {
      id: 6,
      name: "Fernanda Costa",
      profession: "Podóloga",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=100",
      text: "Finalmente encontrei um jaleco que une funcionalidade e estilo. Os detalhes dourados são sofisticados e discretos. Simplesmente perfeito para minha profissão!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-luxo-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxo-blue mb-6 font-serif">
            O Que Nossas <span className="text-gradient-gold">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A satisfação de quem já usa nossos jalecos é nossa maior conquista. 
            Veja os depoimentos de profissionais que escolheram a Luxo's.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-xl transition-shadow duration-300 bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-luxo-gold text-lg">⭐</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-luxo-gold"
                  />
                  <div>
                    <div className="font-semibold text-luxo-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.profession}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-blue p-8 rounded-2xl shadow-lg max-w-3xl mx-auto text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
              Junte-se às Nossas <span className="text-luxo-gold">Clientes Satisfeitas</span>
            </h3>
            <p className="text-lg mb-6 text-luxo-gold-light">
              Experimente a diferença de usar um jaleco verdadeiramente exclusivo. 
              Sua satisfação é nossa prioridade número um.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Vi os depoimentos e gostaria de conhecer mais sobre os jalecos da Luxo\'s.', '_blank')}
              className="bg-luxo-gold text-luxo-blue-dark hover:bg-luxo-gold-light transform hover:scale-105 transition-all duration-300 px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Quero Meu Jaleco Exclusivo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
