// NewPlantForm.js

import React, { useState } from 'react';

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const newPlant = await response.json();
        onAddPlant(newPlant);
        setFormData({ name: '', image: '', price: '' });
      } else {
        throw new Error('Failed to add new plant');
      }
    } catch (error) {
      console.error('Error adding new plant:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-plant-form">
      {/* Form inputs for name, image, and price */}
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;

