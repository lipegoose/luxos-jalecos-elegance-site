
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const FAVORITES_KEY = 'luxos-jalecos-favorites';

interface FavoritesContextType {
  favorites: string[];
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  isLoaded: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar favoritos do localStorage quando o Provider é inicializado
  useEffect(() => {
    console.log('🔄 [Context] Iniciando carregamento do localStorage...');
    const savedFavorites = localStorage.getItem(FAVORITES_KEY);
    console.log('📖 [Context] Dados lidos do localStorage:', savedFavorites);
    
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        console.log('✅ [Context] Favoritos parseados:', parsedFavorites);
        setFavorites(parsedFavorites);
      } catch (error) {
        console.error('❌ [Context] Erro ao carregar favoritos:', error);
        setFavorites([]);
      }
    } else {
      console.log('📭 [Context] Nenhum favorito salvo encontrado');
      setFavorites([]);
    }
    
    setIsLoaded(true);
    console.log('✅ [Context] Carregamento concluído, isLoaded = true');
  }, []);

  // Salvar favoritos no localStorage apenas após carregamento inicial e quando a lista mudar
  useEffect(() => {
    if (isLoaded) {
      console.log('💾 [Context] Salvando favoritos no localStorage:', favorites);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } else {
      console.log('⏳ [Context] Aguardando carregamento inicial antes de salvar');
    }
  }, [favorites, isLoaded]);

  const addToFavorites = (productId: string) => {
    console.log('➕ [Context] addToFavorites chamado para ID:', productId);
    setFavorites(prev => {
      console.log('➕ [Context] Estado anterior:', prev);
      if (!prev.includes(productId)) {
        const newFavorites = [...prev, productId];
        console.log('➕ [Context] Novo estado:', newFavorites);
        return newFavorites;
      }
      console.log('➕ [Context] ID já existe, mantendo:', prev);
      return prev;
    });
  };

  const removeFromFavorites = (productId: string) => {
    console.log('➖ [Context] removeFromFavorites chamado para ID:', productId);
    setFavorites(prev => {
      console.log('➖ [Context] Estado anterior:', prev);
      const newFavorites = prev.filter(id => id !== productId);
      console.log('➖ [Context] Novo estado:', newFavorites);
      return newFavorites;
    });
  };

  const toggleFavorite = (productId: string) => {
    console.log('🔄 [Context] toggleFavorite chamado para ID:', productId);
    
    setFavorites(prevFavorites => {
      console.log('🔄 [Context] Estado atual antes do toggle:', prevFavorites);
      console.log('🔄 [Context] Verificando se', productId, 'está incluído:', prevFavorites.includes(productId));
      
      if (prevFavorites.includes(productId)) {
        // Remove do array se já existe
        const newFavorites = prevFavorites.filter(id => id !== productId);
        console.log('🔄 [Context] Removendo - novo estado:', newFavorites);
        return newFavorites;
      } else {
        // Adiciona ao array se não existe
        const newFavorites = [...prevFavorites, productId];
        console.log('🔄 [Context] Adicionando - novo estado:', newFavorites);
        return newFavorites;
      }
    });
  };

  const isFavorite = (productId: string) => {
    const result = favorites.includes(productId);
    console.log('❓ [Context] isFavorite para ID', productId, ':', result, '(array atual:', favorites, ')');
    return result;
  };

  const value: FavoritesContextType = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    isLoaded
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
