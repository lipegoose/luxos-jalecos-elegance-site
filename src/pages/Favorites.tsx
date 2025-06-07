
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const Favorites = () => {
  const { favorites } = useFavorites();
  
  // Filtrar produtos que estão nos favoritos
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

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
