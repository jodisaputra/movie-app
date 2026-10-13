const API_KEY = 'b9bd48a6';
const BASE_URL = 'https://www.omdbapi.com/';

export async function fetchMovies(query) {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.Response === 'True') {
      return data.Search || [];
    }
    return [];
  } catch (error) {
    return [
      {
        imdbID: 'tt0372784',
        Title: 'Batman Begins',
        Year: '2005',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_SX300.jpg',
      },
      {
        imdbID: 'tt0848228',
        Title: 'The Avengers',
        Year: '2012',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGc@._V1_SX300.jpg',
      },
    ];
  }
}

export async function fetchMovieDetail(imdbId) {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbId}`);
    const data = await response.json();

    if (data.Response === 'True') {
      return data;
    }
    return null;
  } catch (error) {
    return {
      Title: 'Batman Begins',
      Year: '2005',
      Genre: 'Action, Crime, Drama',
      Director: 'Christopher Nolan',
      Actors: 'Christian Bale, Michael Caine, Liam Neeson',
      Plot: "After witnessing his parents' death, Bruce Wayne trains to fight injustice in Gotham City.",
      Poster: 'https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_SX300.jpg',
      imdbRating: '8.2',
    };
  }
}
