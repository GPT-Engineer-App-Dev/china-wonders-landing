import React from 'react';

const Introduction = () => {
  return (
    <section className="bg-yellow-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to China</h2>
        <p className="text-xl mb-8">Discover the rich history, diverse culture, and breathtaking landscapes of the world's most populous country.</p>
        <img src="/placeholder.svg" alt="Great Wall of China" className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default Introduction;
