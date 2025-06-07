
import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'luxos-jalecos-favorites';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar favoritos do localStorage quando o hook é inicializado
  useEffect(() => {
    console.log('🔄 Iniciando carregamento do localStorage...');
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    console.log('📖 Dados lidos do localStorage:', savedFavorites);
    
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        console.log('✅ Favoritos parseados:', parsedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error('❌ Erro ao carregar favoritos:', error);
        setFavorites([]);
      }
    } else {
      console.log('📭 Nenhum favorito salvo encontrado');
      setFavorites([]);
    }
    
    setIsLoaded(true);
    console.log('✅ Carregamento concluído, isLoaded = true');
  }, []);

  // Salvar favoritos no localStorage apenas após carregamento inicial e quando a lista mudar
  useEffect(() => {
    if (isLoaded) {
      console.log('💾 Salvando favoritos no localStorage:', favorites);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } else {
      console.log('⏳ Aguardando carregamento inicial antes de salvar');
    }
  }, [favorites, isLoaded]);

  const addToFavorites = (productId: string) => {
    console.log('➕ addToFavorites chamado para ID:', productId);
    setFavorites(prev => {
      console.log('➕ Estado anterior:', prev);
      if (!prev.includes(productId)) {
        const newFavorites = [...prev, productId];
        console.log('➕ Novo estado:', newFavorites);
        return newFavorites;
      }
      console.log('➕ ID já existe, mantendo:', prev);
      return prev;
    });
  };

  const removeFromFavorites = (productId: string) => {
    console.log('➖ removeFromFavorites chamado para ID:', productId);
    setFavorites(prev => {
      console.log('➖ Estado anterior:', prev);
      const newFavorites = prev.filter(id => id !== productId);
      console.log('➖ Novo estado:', newFavorites);
      return newFavorites;
    });
  };

  const toggleFavorite = (productId: string) => {
    console.log('🔄 toggleFavorite chamado para ID:', productId);
    
    setFavorites(prevFavorites => {
      console.log('🔄 Estado atual antes do toggle:', prevFavorites);
      console.log('🔄 Verificando se', productId, 'está incluído:', prevFavorites.includes(productId));
      
      if (prevFavorites.includes(productId)) {
        // Remove do array se já existe
        const newFavorites = prevFavorites.filter(id => id !== productId);
        console.log('🔄 Removendo - novo estado:', newFavorites);
        return newFavorites;
      } else {
        // Adiciona ao array se não existe
        const newFavorites = [...prevFavorites, productId];
        console.log('🔄 Adicionando - novo estado:', newFavorites);
        return newFavorites;
      }
    });
  };

  const isFavorite = (productId: string) => {
    const result = favorites.includes(productId);
    console.log('❓ isFavorite para ID', productId, ':', result, '(array atual:', favorites, ')');
    return result;
  };

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    isLoaded
  };
};
