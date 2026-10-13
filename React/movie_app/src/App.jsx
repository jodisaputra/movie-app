import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import MovieDetail from './components/MovieDetail';
import { fetchMovies } from './services/movieService';
import './App.css';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    setIsLoading(true);
    setSelectedMovieId(null);
    const results = await fetchMovies(query);
    setMovies(results);
    setIsLoading(false);
  };

  useEffect(() => {
    handleSearch('Avengers');
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Movie App</h1>
      </header>

      <main className="app-main">
        {selectedMovieId ? (
          <MovieDetail
            imdbId={selectedMovieId}
            onBack={() => setSelectedMovieId(null)}
          />
        ) : (
          <>
            <SearchBar onSearch={handleSearch} />

            {isLoading ? (
              <div className="status-message">Memuat film...</div>
            ) : movies.length === 0 ? (
              <div className="status-message">Film tidak ditemukan.</div>
            ) : (
              <div className="movie-grid">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.imdbID}
                    movie={movie}
                    onSelect={(id) => setSelectedMovieId(id)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
