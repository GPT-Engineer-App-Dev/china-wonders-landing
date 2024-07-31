import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, location, rating, comment }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-2">
      <h3 className="text-lg font-semibold">{name}</h3>
      <span className="text-sm text-gray-500 ml-2">from {location}</span>
    </div>
    <div className="flex items-center mb-2">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="text-yellow-400 w-4 h-4 fill-current" />
      ))}
    </div>
    <p className="text-gray-700">{comment}</p>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      location: "USA",
      rating: 5,
      comment: "Visiting the Great Wall was a dream come true. China's history and culture are truly awe-inspiring!"
    },
    {
      name: "Emma Smith",
      location: "UK",
      rating: 4,
      comment: "The food in China was incredible. I loved exploring the different regional cuisines!"
    },
    {
      name: "Carlos Rodriguez",
      location: "Spain",
      rating: 5,
      comment: "The Terracotta Army in Xi'an left me speechless. A must-see for any history enthusiast!"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Visitors Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
