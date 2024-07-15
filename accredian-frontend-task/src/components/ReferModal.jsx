// src/components/ReferModal.jsx
import React, { useState } from 'react';

const ReferModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Your Name</label>
            <input 
              type="text" 
              name="referrerName"
              value={formData.referrerName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Your Email</label>
            <input 
              type="email" 
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Name</label>
            <input 
              type="text" 
              name="refereeName"
              value={formData.refereeName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Friend's Email</label>
            <input 
              type="email" 
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required 
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
            Submit
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-blue-500">Close</button>
      </div>
    </div>
  );
};

export default ReferModal;