export default function MovieCard({ movie, onSelect }) {
  const hasPoster = movie.Poster && movie.Poster !== 'N/A';

  return (
    <div className="movie-card" onClick={() => onSelect(movie.imdbID)}>
      <div className="poster-wrapper">
        {hasPoster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="no-poster">No Poster</div>
        )}
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>Tahun: {movie.Year}</p>
      </div>
    </div>
  );
}
