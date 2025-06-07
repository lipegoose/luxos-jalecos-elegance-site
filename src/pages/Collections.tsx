
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { collections } from '@/data/collections';

const Collections = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Espaçamento para o header fixo */}
      <div className="pt-32">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light text-luxo-blue-navy mb-4">
              Nossas Coleções
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra todas as nossas coleções exclusivas de jalecos e scrubs premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {collections.map((collection) => (
              <div key={collection.id} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden mb-4">
                  <img 
                    src={collection.coverImage} 
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-light text-gray-800 mb-3 tracking-wide">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  <Link to={`/colecoes/${collection.slug}`}>
                    <Button 
                      variant="outline"
                      className="border-luxo-blue text-luxo-blue hover:bg-luxo-blue hover:text-white text-sm font-light px-6"
                    >
                      VER MAIS
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Collections;
