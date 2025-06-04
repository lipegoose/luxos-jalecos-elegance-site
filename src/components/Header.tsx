
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/d6746f67-dba9-4a30-855f-d822054b4569.png" 
              alt="Luxo's Jalecos" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('catalog')}
              className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300 font-medium"
            >
              Catálogo
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300 font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300 font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </div>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-luxo-blue hover:text-luxo-gold"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-fade-in">
            <div className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300 font-medium text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('catalog')}
                className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300 font-medium text-left"
              >
                Catálogo
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300 font-medium text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300 font-medium text-left"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300 font-medium text-left"
              >
                Contato
              </button>
              <div className="flex items-center space-x-4 pt-4 border-t">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-luxo-blue hover:text-luxo-gold transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
