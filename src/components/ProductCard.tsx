
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  paymentLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  features,
  paymentLink
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();
  const isFavorited = isFavorite(id);

  const handlePurchase = () => {
    window.open(paymentLink, '_blank');
  };

  const handleToggleFavorite = () => {
    toggleFavorite(id);
  };

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden mb-3">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Heart Icon */}
        <button 
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm transition-all duration-300"
        >
          <Heart 
            size={16} 
            className={`${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-600'} transition-colors`}
          />
        </button>

        {/* Quick Shop Button - Appears on Hover */}
        {isHovered && (
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              onClick={handlePurchase}
              className="w-full bg-luxo-blue hover:bg-luxo-blue-dark text-white text-sm font-light"
            >
              COMPRAR AGORA
            </Button>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="text-left">
        <h3 className="text-sm font-light text-gray-800 mb-1 leading-tight">{name}</h3>
        <p className="text-sm font-medium text-gray-900">{price}</p>
        
        {/* Size Options */}
        <div className="flex gap-1 mt-2">
          {['P', 'M', 'G', 'GG'].map((size) => (
            <button 
              key={size}
              className="w-8 h-8 border border-gray-300 text-xs font-light hover:border-luxo-blue hover:text-luxo-blue transition-colors"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
