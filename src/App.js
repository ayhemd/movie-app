import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller.', posterURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fscreenrant.com%2Finception-movie-behind-scenes-making-of-facts-trivia%2F&psig=AOvVaw2Zpqk7WY4zpHSvYoZHc2HZ&ust=1735931251621000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDvks_e14oDFQAAAAAdAAAAABAQ', rating: 5 },
    { title: 'The Matrix', description: 'A hacker discovers reality.', posterURL: 'https://via.placeholder.com/250x300', rating: 4 },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = () => {
    const newMovie = {
      title: 'New Movie',
      description: 'A new exciting movie.',
      posterURL: 'https://via.placeholder.com/250x300',
      rating: 3,
    };
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]);
  };

  const handleFilter = (title, rating) => {
    let filtered = movies;
    if (title) filtered = filtered.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()));
    if (rating) filtered = filtered.filter((movie) => movie.rating >= parseFloat(rating));
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h1>Movie App</h1>
      <button onClick={addMovie} style={{ marginBottom: '20px' }}>
        Add Movie
      </button>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
