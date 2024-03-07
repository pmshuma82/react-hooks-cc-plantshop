import React, { useState } from 'react';

function Search({ filterPlants }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterPlants(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Search Plants</h2>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;

