
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular envio do formulário
    console.log('Formulário enviado:', formData);
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Retornaremos o contato em breve. Obrigada pelo interesse!",
    });
    
    // Limpar formulário
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-luxo-blue mb-6 font-serif">
            Entre em <span className="text-gradient-gold">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontas para criar o jaleco perfeito para você. 
            Entre em contato e vamos conversar sobre suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulário */}
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-luxo-blue mb-6 font-serif">Envie sua Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-luxo-blue font-medium">Nome Completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 border-gray-300 focus:border-luxo-gold"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-luxo-blue font-medium">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 border-gray-300 focus:border-luxo-gold"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-luxo-blue font-medium">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 border-gray-300 focus:border-luxo-gold"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-luxo-blue font-medium">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 border-gray-300 focus:border-luxo-gold min-h-[120px]"
                    placeholder="Conte-nos sobre o jaleco que você deseja..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-gold text-luxo-blue-dark hover:shadow-lg transform hover:scale-105 transition-all duration-300 py-3 text-lg font-semibold"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-2xl font-bold text-luxo-blue mb-8 font-serif">Outras Formas de Contato</h3>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border border-luxo-gold/20">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-luxo-blue-dark text-xl">📱</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-luxo-blue mb-1">WhatsApp</h4>
                    <p className="text-gray-600 mb-2">Atendimento rápido e personalizado</p>
                    <Button 
                      variant="outline"
                      className="border-luxo-gold text-luxo-blue hover:bg-luxo-gold hover:text-luxo-blue-dark"
                      onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os jalecos da Luxo\'s.', '_blank')}
                    >
                      Iniciar Conversa
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Instagram */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border border-luxo-gold/20">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-luxo-blue-dark text-xl">📷</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-luxo-blue mb-1">Instagram</h4>
                    <p className="text-gray-600 mb-2">Veja nossas criações em detalhes</p>
                    <Button 
                      variant="outline"
                      className="border-luxo-gold text-luxo-blue hover:bg-luxo-gold hover:text-luxo-blue-dark"
                      onClick={() => window.open('https://instagram.com/luxosjalecos', '_blank')}
                    >
                      Seguir @luxosjalecos
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Facebook */}
              <Card className="hover:shadow-lg transition-shadow duration-300 border border-luxo-gold/20">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                    <span className="text-luxo-blue-dark text-xl">👥</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-luxo-blue mb-1">Facebook</h4>
                    <p className="text-gray-600 mb-2">Acompanhe novidades e promoções</p>
                    <Button 
                      variant="outline"
                      className="border-luxo-gold text-luxo-blue hover:bg-luxo-gold hover:text-luxo-blue-dark"
                      onClick={() => window.open('https://facebook.com/luxosjalecos', '_blank')}
                    >
                      Curtir Página
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Horário de Atendimento */}
            <div className="mt-8 bg-luxo-gray p-6 rounded-2xl">
              <h4 className="font-semibold text-luxo-blue mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Segunda - Sexta:</span>
                  <span>8h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>8h - 14h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
