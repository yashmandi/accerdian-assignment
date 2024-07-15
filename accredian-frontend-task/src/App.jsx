// src/App.jsx
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferModal from './components/ReferModal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <HeroSection onReferNowClick={handleReferNowClick} />
      <ReferModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;