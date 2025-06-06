
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dra. Marina Santos",
      profession: "Dermatologista",
      text: "O jaleco da Luxo's transformou completamente minha apresentação profissional. Os detalhes são únicos e recebo elogios constantemente.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100"
    },
    {
      id: 2,
      name: "Paula Oliveira",
      profession: "Esteticista",
      text: "Nunca pensei que um jaleco pudesse ser tão elegante! O acabamento é impecável e o conforto durante o trabalho é incomparável.",
      image: "https://images.unsplash.com/photo-1594824047471-2ad1c6b0d1cf?auto=format&fit=crop&q=80&w=100"
    },
    {
      id: 3,
      name: "Dra. Ana Carolina",
      profession: "Dentista",
      text: "A qualidade dos tecidos e o acabamento artesanal fazem toda a diferença. Meus pacientes sempre comentam sobre a beleza do meu jaleco.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4 tracking-wide">
            DEPOIMENTOS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja o que nossas clientes falam sobre os jalecos Luxo's
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 text-center">
              <div className="mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
                />
                <blockquote className="text-gray-600 leading-relaxed mb-4 text-sm">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <div className="font-medium text-gray-800 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">{testimonial.profession}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
