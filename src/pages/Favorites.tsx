
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useFavorites } from '@/hooks/useFavorites';
import { Button } from '@/components/ui/button';

// Lista de produtos (mesma que está sendo usada em outras páginas)
const products = [
  {
    id: "1",
    name: "Jaleco Feminino Premium Bordado",
    description: "Jaleco premium com bordados delicados e tecido de alta qualidade",
    price: "R$ 189,90",
    image: "/lovable-uploads/7393c34f-1359-4e2f-b3f2-d8873ada7ea3.png",
    features: ["Tecido Premium", "Bordado Exclusivo", "Ajuste Perfeito"],
    paymentLink: "https://wa.me/5511999999999?text=Olá! Gostaria de comprar o Jaleco Feminino Premium Bordado"
  },
  {
    id: "2", 
    name: "Jaleco Feminino Clássico Elegante",
    description: "Design clássico com toque moderno e sofisticado",
    price: "R$ 159,90",
    image: "/lovable-uploads/8a5bf6c3-13b9-4f33-9ae7-5bd79519f40a.png",
    features: ["Design Clássico", "Tecido Confortável", "Durabilidade"],
    paymentLink: "https://wa.me/5511999999999?text=Olá! Gostaria de comprar o Jaleco Feminino Clássico Elegante"
  },
  {
    id: "3",
    name: "Jaleco Feminino Moderno Slim",
    description: "Corte slim moderno que valoriza a silhueta feminina",
    price: "R$ 169,90", 
    image: "/lovable-uploads/7c599a3d-6b22-44fd-a4fe-b54a962b12dd.png",
    features: ["Corte Slim", "Design Moderno", "Tecido Flexível"],
    paymentLink: "https://wa.me/5511999999999?text=Olá! Gostaria de comprar o Jaleco Feminino Moderno Slim"
  },
  {
    id: "4",
    name: "Jaleco Feminino Luxo Dourado",
    description: "Jaleco de luxo com detalhes dourados exclusivos",
    price: "R$ 229,90",
    image: "/lovable-uploads/aef4a17b-8549-44ca-9025-d523fadf1000.png", 
    features: ["Detalhes Dourados", "Tecido Luxo", "Exclusivo"],
    paymentLink: "https://wa.me/5511999999999?text=Olá! Gostaria de comprar o Jaleco Feminino Luxo Dourado"
  },
  {
    id: "5",
    name: "Jaleco Feminino Profissional",
    description: "Ideal para o dia a dia profissional com máximo conforto",
    price: "R$ 139,90",
    image: "/lovable-uploads/bc79764a-5435-4836-98c2-797e3b041fed.png",
    features: ["Conforto Total", "Praticidade", "Resistente"],
    paymentLink: "https://wa.me/5511999999999?text=Olá! Gostaria de comprar o Jaleco Feminino Profissional"
  },
  {
    id: "6",
    name: "Jaleco Feminino Deluxe",
    description: "Nossa linha mais sofisticada com acabamento premium",
    price: "R$ 199,90",
    image: "/lovable-uploads/bd152ced-da3b-49c7-a93c-33134f8f9cb5.png",
    features: ["Acabamento Premium", "Design Sofisticado", "Qualidade Superior"],
    paymentLink: "https://wa.me/5511999999999?text=Olá! Gostaria de comprar o Jaleco Feminino Deluxe"
  }
];

const Favorites = () => {
  const { favorites } = useFavorites();
  
  console.log('Produtos carregados:', products);
  console.log('IDs favoritos:', favorites);
  
  // Filtrar produtos que estão nos favoritos
  const favoriteProducts = products.filter(product => favorites.includes(product.id));
  console.log('Produtos favoritos filtrados:', favoriteProducts);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Espaçamento para o header fixo */}
      <div className="pt-32">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light text-luxo-blue-navy mb-4">
              Meus Favoritos
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aqui estão os jalecos que você marcou como favoritos
            </p>
          </div>

          {favoriteProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {favoriteProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <h2 className="text-xl font-light text-luxo-blue-navy mb-4">
                  Você ainda não tem favoritos
                </h2>
                <p className="text-gray-600 mb-6">
                  Explore nossa coleção e marque os jalecos que mais gostar clicando no coração
                </p>
                <Link to="/">
                  <Button className="bg-luxo-blue hover:bg-luxo-blue-dark text-white">
                    Ver Produtos
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Favorites;
