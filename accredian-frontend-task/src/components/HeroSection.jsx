// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ onReferNowClick }) => {
  return (
    <section className="bg-blue-500 text-white py-20 text-center">
      <h1 className="text-5xl font-bold mb-4">Refer & Earn</h1>
      <p className="text-xl mb-8">Refer a friend to our course and earn rewards!</p>
      <button 
        className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold transition duration-300 hover:bg-gray-200"
        onClick={onReferNowClick}
      >
        Refer Now
      </button>
    </section>
  );
};

export default HeroSection;