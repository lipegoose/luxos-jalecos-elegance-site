
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { collections } from '@/data/collections';

const CollectionDetail = () => {
  const { collectionSlug } = useParams();
  const collection = collections.find(c => c.slug === collectionSlug);

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-luxo-blue-navy mb-4">
            Coleção não encontrada
          </h1>
          <Link to="/colecoes">
            <Button className="bg-luxo-blue hover:bg-luxo-blue-dark text-white">
              Voltar às Coleções
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Espaçamento para o header fixo */}
      <div className="pt-32">
        <div className="container mx-auto px-4 py-8">
          {/* Botão Voltar */}
          <div className="mb-8">
            <Link to="/colecoes">
              <Button 
                variant="ghost" 
                className="text-luxo-blue hover:text-luxo-blue-dark flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Voltar às Coleções
              </Button>
            </Link>
          </div>

          {/* Cabeçalho da Coleção */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-light text-luxo-blue-navy mb-4">
              {collection.name}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {collection.description}
            </p>
          </div>

          {/* Galeria de Imagens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {collection.images.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/4] bg-gray-50 overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${collection.name} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-xl font-light text-luxo-blue-navy mb-4">
              Interessou-se por esta coleção?
            </h3>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco via WhatsApp para mais informações e pedidos
            </p>
            <Button className="bg-luxo-blue hover:bg-luxo-blue-dark text-white px-8 py-3">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CollectionDetail;
