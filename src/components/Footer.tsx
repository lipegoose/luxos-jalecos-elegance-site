
import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-blue text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/d6746f67-dba9-4a30-855f-d822054b4569.png" 
              alt="Luxo's Jalecos" 
              className="h-16 w-auto mx-auto md:mx-0 mb-4"
            />
            <p className="text-luxo-gold-light leading-relaxed">
              Criando jalecos únicos e sofisticados para profissionais que valorizam a elegância e qualidade.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-6 font-serif">Links Rápidos</h4>
            <div className="space-y-3">
              <a href="#home" className="block text-luxo-gold-light hover:text-luxo-gold transition-colors duration-300">
                Início
              </a>
              <a href="#catalog" className="block text-luxo-gold-light hover:text-luxo-gold transition-colors duration-300">
                Catálogo
              </a>
              <a href="#about" className="block text-luxo-gold-light hover:text-luxo-gold transition-colors duration-300">
                Sobre Nós
              </a>
              <a href="#testimonials" className="block text-luxo-gold-light hover:text-luxo-gold transition-colors duration-300">
                Depoimentos
              </a>
              <a href="#contact" className="block text-luxo-gold-light hover:text-luxo-gold transition-colors duration-300">
                Contato
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-6 font-serif">Conecte-se Conosco</h4>
            
            <div className="space-y-4 mb-6">
              <p className="text-luxo-gold-light">
                📱 WhatsApp: (11) 99999-9999
              </p>
              <p className="text-luxo-gold-light">
                📧 contato@luxosjalecos.com.br
              </p>
              <p className="text-luxo-gold-light">
                🕒 Seg-Sex: 8h-18h | Sáb: 8h-14h
              </p>
            </div>

            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://instagram.com/luxosjalecos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-luxo-gold/20 p-3 rounded-full hover:bg-luxo-gold hover:text-luxo-blue-dark transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/luxosjalecos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-luxo-gold/20 p-3 rounded-full hover:bg-luxo-gold hover:text-luxo-blue-dark transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxo-gold/30 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-luxo-gold-light text-sm">
              © 2024 Luxo's Jalecos. Todos os direitos reservados.
            </p>
            <p className="text-luxo-gold-light text-sm">
              Desenvolvido com ❤️ para profissionais únicos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
