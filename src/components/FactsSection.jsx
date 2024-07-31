import React from 'react';
import { Users, MapPin, Utensils, Calendar } from 'lucide-react';

const FactCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-2">{title}</h3>
    </div>
    <p>{description}</p>
  </div>
);

const FactsSection = () => {
  const facts = [
    {
      icon: <Users className="text-blue-500" />,
      title: "Population",
      description: "With over 1.4 billion people, China is the world's most populous country."
    },
    {
      icon: <MapPin className="text-green-500" />,
      title: "Geography",
      description: "China spans approximately 9.6 million square kilometers, making it the 4th largest country by land area."
    },
    {
      icon: <Utensils className="text-red-500" />,
      title: "Cuisine",
      description: "Chinese cuisine is renowned worldwide, with diverse regional styles and flavors."
    },
    {
      icon: <Calendar className="text-yellow-500" />,
      title: "History",
      description: "China boasts one of the world's oldest civilizations, with a history spanning over 5,000 years."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Fascinating Facts About China</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <FactCard key={index} {...fact} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
