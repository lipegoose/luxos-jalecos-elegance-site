import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
import { products } from '@/data/products';

const InspireSe = () => {
  const { toggleFavorite, isFavorite } = useFavorites();

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
          {products
            .filter(product => product.inspire)
            .map((product) => (
              <div key={product.id} className="group cursor-pointer relative">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm transition-all duration-300"
                  >
                    <Heart 
                      size={16} 
                      className={`${isFavorite(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'} transition-colors`}
                    />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default InspireSe;
