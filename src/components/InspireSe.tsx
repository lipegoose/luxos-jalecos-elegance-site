
import React from 'react';

const InspireSe = () => {
  const inspirationImages = [
    '/lovable-uploads/8a5bf6c3-13b9-4f33-9ae7-5bd79519f40a.png',
    '/lovable-uploads/d0e10326-430d-4428-b506-6f7bd6f9ba70.png',
    '/lovable-uploads/bc79764a-5435-4836-98c2-797e3b041fed.png',
    '/lovable-uploads/eaf53d67-ec0f-4191-a8fd-7239c355e8e7.png',
    '/lovable-uploads/bd152ced-da3b-49c7-a93c-33134f8f9cb5.png',
    '/lovable-uploads/cd41ff5f-15b1-4bf3-9fa9-7d23dd138c13.png',
    '/lovable-uploads/7393c34f-1359-4e2f-b3f2-d8873ada7ea3.png',
    '/lovable-uploads/7c599a3d-6b22-44fd-a4fe-b54a962b12dd.png'
  ];

  return (
    <section id="inspire-se" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-800 mb-4 tracking-wide">
            INSPIRE-SE
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja como nossas clientes usam os jalecos Luxo's no dia a dia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {inspirationImages.map((image, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image} 
                  alt={`Inspiração ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspireSe;
