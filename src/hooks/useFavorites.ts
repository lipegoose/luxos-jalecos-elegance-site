
import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'luxos-jalecos-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar favoritos do localStorage quando o hook é inicializado
  useEffect(() => {
    console.log('Lendo favoritos do localStorage...');
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    console.log('Dados lidos:', savedFavorites);
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        console.log('Favoritos parseados:', parsedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
        setFavorites([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // Salvar favoritos no localStorage apenas após carregamento inicial e quando a lista mudar
  useEffect(() => {
    if (isLoaded) {
      console.log('Salvando favoritos:', favorites);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const addToFavorites = (productId: string) => {
    setFavorites(prev => {
      if (!prev.includes(productId)) {
        return [...prev, productId];
      }
      return prev;
    });
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites(prev => prev.filter(id => id !== productId));
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        // Remove do array se já existe
        return prev.filter(id => id !== productId);
      } else {
        // Adiciona ao array se não existe
        return [...prev, productId];
      }
    });
  };

  const isFavorite = (productId: string) => {
    return favorites.includes(productId);
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite
  };
};
