
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/d6746f67-dba9-4a30-855f-d822054b4569.png" 
              alt="Luxo's Jalecos" 
              className="h-12 w-auto mx-auto md:mx-0 mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Jalecos únicos e sofisticados para profissionais que valorizam elegância e qualidade.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide">Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">
                Início
              </a>
              <a href="#catalog" className="block text-gray-400 hover:text-white transition-colors">
                Jalecos
              </a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide">Contato</h4>
            <div className="space-y-2 text-sm text-gray-400 mb-4">
              <p>WhatsApp: (11) 99999-9999</p>
              <p>contato@luxosjalecos.com.br</p>
            </div>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://instagram.com/luxosjalecos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/luxosjalecos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Luxo's Jalecos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
