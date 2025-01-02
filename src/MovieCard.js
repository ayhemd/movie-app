import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, description, posterURL, rating } = movie;
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '250px' }}>
      <img src={posterURL} alt={title} style={{ width: '100%', height: '300px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}/5</p>
    </div>
  );
};

export default MovieCard;
