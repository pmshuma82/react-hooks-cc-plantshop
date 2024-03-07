import React from 'react';

function PlantList({ plants, markSoldOut }) {
  return (
    <div className="plant-list">
      <h2>Plants</h2>
      {plants.map((plant) => (
        <div key={plant.id} className="plant-item">
          <img src={plant.image} alt={plant.name} />
          <h4>{plant.name}</h4>
          <p>Price: ${plant.price}</p>
          {!plant.soldOut && (
            <button onClick={() => markSoldOut(plant.id)}>Mark as Sold Out</button>
          )}
          {plant.soldOut && <p>Out of Stock</p>}
        </div>
      ))}
    </div>
  );
}

export default PlantList;

