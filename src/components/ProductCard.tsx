
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
  const handlePurchase = () => {
    window.open(paymentLink, '_blank');
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-luxo-blue mb-3 font-serif">{name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-luxo-blue mb-2 uppercase tracking-wide">Diferenciais:</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <div className="w-1.5 h-1.5 bg-luxo-gold rounded-full mr-2"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl font-bold text-luxo-blue font-serif">{price}</span>
          <span className="text-sm text-gray-500">à vista</span>
        </div>

        {/* Purchase Button */}
        <Button 
          onClick={handlePurchase}
          className="w-full bg-gradient-gold text-luxo-blue-dark hover:shadow-lg transform hover:scale-105 transition-all duration-300 py-3 text-lg font-semibold"
        >
          Comprar Agora
        </Button>

        {/* WhatsApp Contact */}
        <Button 
          variant="outline"
          className="w-full mt-3 border-luxo-blue text-luxo-blue hover:bg-luxo-blue hover:text-white transition-all duration-300"
          onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre este jaleco.', '_blank')}
        >
          Tirar Dúvidas no WhatsApp
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
