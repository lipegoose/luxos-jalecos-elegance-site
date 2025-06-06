
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Featured from '@/components/Featured';
import Collections from '@/components/Collections';
import Novidades from '@/components/Novidades';
import InspireSe from '@/components/InspireSe';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Collections />
      <Novidades />
      <InspireSe />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
