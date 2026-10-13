import { useState, useEffect } from 'react';
import { fetchMovieDetail } from '../services/movieService';

export default function MovieDetail({ imdbId, onBack }) {
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    fetchMovieDetail(imdbId).then((data) => {
      if (isMounted) {
        console.log(data);
        setDetail(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [imdbId]);

  if (isLoading) {
    return <div className="status-message">Memuat detail film...</div>;
  }

  if (!detail) {
    return (
      <div className="status-message">
        <p>Gagal memuat detail film.</p>
        <button className="back-btn" onClick={onBack}>
          Kembali
        </button>
      </div>
    );
  }

  const hasPoster = detail.Poster && detail.Poster !== 'N/A';

  return (
    <div className="detail-container">
      <button className="back-btn" onClick={onBack}>
        &larr; Kembali ke Daftar
      </button>

      <div className="detail-content">
        <div className="detail-poster">
          {hasPoster ? (
            <img src={detail.Poster} alt={detail.Title} />
          ) : (
            <div className="no-poster-large">No Poster</div>
          )}
        </div>

        <div className="detail-info">
          <h2>{detail.Title}</h2>

          <div className="detail-meta">
            <span className="rating-badge">&#9733; {detail.imdbRating || '-'} / 10</span>
            <span className="meta-item">Tahun: {detail.Year}</span>
            <span className="genre-tag">{detail.Genre}</span>
          </div>

          <div className="synopsis">
            <h3>Sinopsis</h3>
            <p>{detail.Plot || 'Tidak ada sinopsis.'}</p>
          </div>

          <div className="extra-info">
            <p>
              <strong>Sutradara:</strong> {detail.Director || '-'}
            </p>
            <p>
              <strong>Pemeran:</strong> {detail.Actors || '-'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
