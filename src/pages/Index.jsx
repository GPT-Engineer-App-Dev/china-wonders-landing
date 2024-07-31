import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import FactsSection from '../components/FactsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Introduction />
        <FactsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
