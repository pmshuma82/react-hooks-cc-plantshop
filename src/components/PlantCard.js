import React from 'react';

function PlantCard({ plant, handleSoldOut }) {
  const { id, name, image, price, isSoldOut } = plant;

  return (
    <div className="plant-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {isSoldOut ? (
        <button disabled>Sold Out</button>
      ) : (
        <button onClick={() => handleSoldOut(id)}>Mark as Sold Out</button>
      )}
    </div>
  );
}

export default PlantCard;
