import React, { useState, useEffect } from 'react';
import { Menu, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito para lidar com o scroll após a navegação
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const scrollToSection = async (sectionId: string) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // Se não estiver na página inicial, navega para ela com o hash
      navigate(`/#${sectionId}`);
    } else {
      // Se já estiver na página inicial, apenas faz o scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Remove o estado de navegação após um pequeno delay
    setTimeout(() => {
      setIsNavigating(false);
    }, 500);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top promotional bar */}
      <div className="bg-luxo-blue-light text-white text-center py-2 text-sm font-light">
        <p>FRETE GRÁTIS para compras acima de R$ 299 | PARCELAMENTO EM ATÉ 6X SEM JUROS</p>
      </div>
      
      {/* Main header */}
      <div className="bg-luxo-blue-navy">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="/lovable-uploads/d6746f67-dba9-4a30-855f-d822054b4569.png" 
                  alt="Luxo's Jalecos" 
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/colecoes"
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm"
              >
                COLEÇÕES
              </Link>
              <Link 
                to="/favoritos"
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm"
              >
                FAVORITOS
              </Link>
              <button 
                onClick={() => scrollToSection('featured')}
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm flex items-center gap-2"
                disabled={isNavigating}
              >
                DESTAQUE
                {isNavigating && <Loader2 className="h-4 w-4 animate-spin" />}
              </button>
              <button 
                onClick={() => scrollToSection('novidades')}
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm flex items-center gap-2"
                disabled={isNavigating}
              >
                NOVIDADES
                {isNavigating && <Loader2 className="h-4 w-4 animate-spin" />}
              </button>
              <button 
                onClick={() => scrollToSection('inspire-se')}
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm flex items-center gap-2"
                disabled={isNavigating}
              >
                INSPIRE-SE
                {isNavigating && <Loader2 className="h-4 w-4 animate-spin" />}
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm flex items-center gap-2"
                disabled={isNavigating}
              >
                SOBRE
                {isNavigating && <Loader2 className="h-4 w-4 animate-spin" />}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm flex items-center gap-2"
                disabled={isNavigating}
              >
                CONTATO
                {isNavigating && <Loader2 className="h-4 w-4 animate-spin" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:text-luxo-gold"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-luxo-blue-light mt-4 pt-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/colecoes"
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  COLEÇÕES
                </Link>
                <Link 
                  to="/favoritos"
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAVORITOS
                </Link>
                <button 
                  onClick={() => scrollToSection('featured')}
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm flex items-center gap-2"
                  disabled={isNavigating}
                >
                  DESTAQUE
                  {isNavigating && <Loader2 className="h-4 w-4 animate-spin" />}
                </button>
                <button 
                  onClick={() => scrollToSection('novidades')}
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm flex items-center gap-2"
                  disabled={isNavigating}
                >
                  NOVIDADES
                  {isNavigating && <Loader2 className="h-4 w-4 animate-spin" />}
                </button>
                <button 
                  onClick={() => scrollToSection('inspire-se')}
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm flex items-center gap-2"
                  disabled={isNavigating}
                >
                  INSPIRE-SE
                  {isNavigating && <Loader2 className="h-4 w-4 animate-spin" />}
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm flex items-center gap-2"
                  disabled={isNavigating}
                >
                  SOBRE
                  {isNavigating && <Loader2 className="h-4 w-4 animate-spin" />}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm flex items-center gap-2"
                  disabled={isNavigating}
                >
                  CONTATO
                  {isNavigating && <Loader2 className="h-4 w-4 animate-spin" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
