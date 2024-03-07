import React, { useState, useEffect } from 'react';
import PlantList from './PlantList';
import NewPlantForm from './NewPlantForm';
import Search from './Search';

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await fetch('http://localhost:6001/plants');
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  const addPlant = async (newPlant) => {
    try {
      const response = await fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlant),
      });
      const data = await response.json();
      setPlants([...plants, data]);
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  const markSoldOut = async (id) => {
    try {
      const updatedPlants = plants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: true } : plant
      );
      setPlants(updatedPlants);
    } catch (error) {
      console.error('Error marking plant as sold out:', error);
    }
  };

  const filterPlants = async (searchTerm) => {
    try {
      const response = await fetch(`http://localhost:6001/plants?q=${searchTerm}`);
      const data = await response.json();
      setPlants(data);
    } catch (error) {
      console.error('Error filtering plants:', error);
    }
  };

  return (
    <div className="App">
      <h1>Plantsy</h1>
      <NewPlantForm addPlant={addPlant} />
      <Search filterPlants={filterPlants} />
      <PlantList plants={plants} markSoldOut={markSoldOut} />
    </div>
  );
}

export default App;
