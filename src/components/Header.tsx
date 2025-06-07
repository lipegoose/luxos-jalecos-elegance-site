
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
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
              <img 
                src="/lovable-uploads/d6746f67-dba9-4a30-855f-d822054b4569.png" 
                alt="Luxo's Jalecos" 
                className="h-8 w-auto"
              />
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('featured')}
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm"
              >
                FEMININO
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm"
              >
                COLEÇÕES
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm"
              >
                SOBRE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-sm"
              >
                CONTATO
              </button>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                <Search size={20} className="text-white hover:text-luxo-gold cursor-pointer transition-colors" />
                <User size={20} className="text-white hover:text-luxo-gold cursor-pointer transition-colors" />
                <Heart size={20} className="text-white hover:text-luxo-gold cursor-pointer transition-colors" />
                <div className="relative">
                  <ShoppingBag size={20} className="text-white hover:text-luxo-gold cursor-pointer transition-colors" />
                  <span className="absolute -top-2 -right-2 bg-luxo-gold text-luxo-blue-navy text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                </div>
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
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-luxo-blue-light mt-4 pt-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('featured')}
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm"
                >
                  FEMININO
                </button>
                <button 
                  onClick={() => scrollToSection('collections')}
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm"
                >
                  COLEÇÕES
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm"
                >
                  SOBRE
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-luxo-gold transition-colors duration-300 font-light text-left text-sm"
                >
                  CONTATO
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
