import React, { useState } from 'react';

function NewPlantForm({ addPlant }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = { name, image, price: parseFloat(price) };
    addPlant(newPlant);
    setName('');
    setImage('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Plant</h2>
      <label>
        Plant name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Image URL:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </label>
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;


