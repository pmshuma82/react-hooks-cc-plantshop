import React, { useState, useEffect } from 'react';
import PlantList from './PlantList';
import NewPlantForm from './NewPlantForm';

function PlantPage() {
  const [plants, setPlants] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(response => response.json())
      .then(data => setPlants(data));
  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const handleSoldOut = (plantId) => {
    setPlants(plants.map(plant => {
      if (plant.id === plantId) {
        return { ...plant, isSoldOut: true };
      }
      return plant;
    }));
  };

  return (
    <div className="plant-page">
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={plants} onSoldOut={handleSoldOut} />
    </div>
  );
}

export default PlantPage;
