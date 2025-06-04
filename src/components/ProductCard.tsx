
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

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
  name,
  description,
  price,
  image,
  features,
  paymentLink
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePurchase = () => {
    window.open(paymentLink, '_blank');
  };

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Overlay with buttons on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/10 flex items-end justify-center p-4 transition-opacity duration-300">
            <div className="space-y-2 w-full">
              <Button 
                onClick={handlePurchase}
                className="w-full bg-white text-gray-800 hover:bg-gray-100 text-sm font-medium"
              >
                COMPRAR
              </Button>
              <Button 
                variant="outline"
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-gray-800 text-sm"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre este jaleco.', '_blank')}
              >
                DETALHES
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Product Info */}
      <div className="text-center">
        <h3 className="text-sm font-medium text-gray-800 mb-1">{name}</h3>
        <p className="text-sm font-semibold text-gray-900">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
