
import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os jalecos da Luxo\'s.', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contato via WhatsApp"
    >
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12.017 2.001C6.486 2.001 2.001 6.485 2.001 12.017c0 1.84.498 3.567 1.368 5.053L2 22l4.948-1.355c1.433.805 3.101 1.271 4.869 1.271 5.531 0 10.017-4.485 10.017-10.017C21.834 6.485 17.548 2.001 12.017 2.001zm5.942 14.421c-.241.678-1.424 1.287-1.956 1.335-.53.048-1.227.044-1.985-.309-.461-.215-1.056-.501-1.816-.978-3.2-2.008-5.286-5.394-5.447-5.643-.16-.248-1.311-1.746-1.311-3.335 0-1.589.829-2.371 1.124-2.696.295-.324.643-.405.858-.405.215 0 .43.001.617.011.198.011.462-.075.722.551.264.632.896 2.183.975 2.341.079.158.132.343.026.55-.105.208-.159.338-.317.52-.158.182-.332.407-.475.546-.158.158-.322.328-.138.643.183.315.815 1.346 1.751 2.177 1.204.997 2.218 1.306 2.533 1.453.315.148.498.124.681-.075.182-.198.784-.914.993-1.228.208-.314.416-.263.701-.158.285.106 1.807.852 2.117 1.008.31.156.517.234.593.364.075.129.075.754-.166 1.432z"/>
      </svg>
    </button>
  );
};

export default WhatsAppButton;
