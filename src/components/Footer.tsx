
import React from 'react';
import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxo-blue-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand */}
          <div>
            <img 
              src="/lovable-uploads/d6746f67-dba9-4a30-855f-d822054b4569.png" 
              alt="Luxo's Jalecos" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Jalecos únicos e sofisticados para profissionais que valorizam elegância e qualidade.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide text-white">Navegação</h4>
            <div className="space-y-3 text-sm">
              <a href="#home" className="block text-gray-300 hover:text-luxo-gold transition-colors">
                Início
              </a>
              <a href="#featured" className="block text-gray-300 hover:text-luxo-gold transition-colors">
                Em Destaque
              </a>
              <a href="#collections" className="block text-gray-300 hover:text-luxo-gold transition-colors">
                Coleções
              </a>
              <a href="#about" className="block text-gray-300 hover:text-luxo-gold transition-colors">
                Sobre
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide text-white">Atendimento</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 14h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wide text-white">Contato</h4>
            <div className="space-y-3 text-sm text-gray-300 mb-4">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@luxosjalecos.com.br</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/luxosjalecos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-luxo-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/luxosjalecos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-luxo-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 Luxo's Jalecos. Todos os direitos reservados. Uma criação <a href="https://hera-i.com.br/" className="inline-flex items-center" target="_blank" rel="noopener noreferrer" title="HeRa-i"><img src="https://hera-i.com.br/imgs/logo.png" alt="HeRa-i" className="h-5 hover:opacity-80 transition-opacity" /></a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
