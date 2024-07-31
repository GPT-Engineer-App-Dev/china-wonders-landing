import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">About China</h1>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="mb-4">
              China, with its rich history spanning thousands of years, is one of the world's oldest civilizations. It's a land of diverse landscapes, from the towering peaks of the Himalayas to the fertile plains of the Yangtze River Delta.
            </p>
            <p className="mb-4">
              Home to over 1.4 billion people, China boasts a culture that's both ancient and ever-evolving. Its contributions to world heritage include the Great Wall, the Terracotta Army, and a legacy of innovations from paper-making to gunpowder.
            </p>
            <p>
              Today, China is a global economic powerhouse, blending tradition with modernity in its rapidly growing cities and preserving its cultural treasures in its vast countryside.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
