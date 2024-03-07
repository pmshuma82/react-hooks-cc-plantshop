// PlantList.js

import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, searchQuery }) {
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="plant-list">
      {filteredPlants.map(plant => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}

export default PlantList;
