
import React from 'react';
import { Button } from '@/components/ui/button';

const Collections = () => {
  const collections = [
    {
      id: 1,
      title: 'COLEÇÃO ELEGANCE',
      description: 'Jalecos sofisticados com acabamentos únicos e detalhes exclusivos para profissionais que valorizam a elegância.',
      image: '/lovable-uploads/8a5bf6c3-13b9-4f33-9ae7-5bd79519f40a.png',
      buttonText: 'VER MAIS'
    },
    {
      id: 2,
      title: 'COLEÇÃO PREMIUM',
      description: 'Linha premium com tecidos importados e modelagem exclusiva para o máximo conforto e sofisticação.',
      image: '/lovable-uploads/d0e10326-430d-4428-b506-6f7bd6f9ba70.png',
      buttonText: 'VER MAIS'
    },
    {
      id: 3,
      title: 'COLEÇÃO LUXURY',
      description: 'Nossa linha mais exclusiva com detalhes artesanais e acabamentos de luxo para profissionais exigentes.',
      image: '/lovable-uploads/f4865231-b9c4-48a7-a68e-131c6d15a640.png',
      buttonText: 'VER MAIS'
    }
  ];

  return (
    <section id="collections" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-4">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-light text-gray-800 mb-3 tracking-wide">
                  {collection.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {collection.description}
                </p>
                <Button 
                  variant="outline"
                  className="border-luxo-blue text-luxo-blue hover:bg-luxo-blue hover:text-white text-sm font-light px-6"
                >
                  {collection.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
