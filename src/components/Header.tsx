
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
      isScrolled ? 'bg-white shadow-sm' : 'bg-white'
    }`}>
      {/* Top bar with promotion */}
      <div className="bg-luxo-blue text-white text-center py-2 text-sm">
        <p>PARCELAMENTO EM ATÉ 5x SEM JUROS</p>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/d6746f67-dba9-4a30-855f-d822054b4569.png" 
              alt="Luxo's Jalecos" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('catalog')}
              className="text-gray-700 hover:text-luxo-blue transition-colors duration-300 font-medium uppercase text-sm"
            >
              JALECOS FEMININOS
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-luxo-blue transition-colors duration-300 font-medium uppercase text-sm"
            >
              SOBRE
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-luxo-blue transition-colors duration-300 font-medium uppercase text-sm"
            >
              DEPOIMENTOS
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-luxo-blue transition-colors duration-300 font-medium uppercase text-sm"
            >
              CONTATO
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-luxo-blue transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-luxo-blue transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-700 hover:text-luxo-blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('catalog')}
                className="text-gray-700 hover:text-luxo-blue transition-colors duration-300 font-medium text-left uppercase text-sm"
              >
                JALECOS FEMININOS
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-luxo-blue transition-colors duration-300 font-medium text-left uppercase text-sm"
              >
                SOBRE
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-luxo-blue transition-colors duration-300 font-medium text-left uppercase text-sm"
              >
                DEPOIMENTOS
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-luxo-blue transition-colors duration-300 font-medium text-left uppercase text-sm"
              >
                CONTATO
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
