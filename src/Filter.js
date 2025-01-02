import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter(title, rating);
  };

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Search by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ marginRight: '10px' }}
        min="0"
        max="5"
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
