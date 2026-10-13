import 'package:flutter_test/flutter_test.dart';
import 'package:movie_app/models/movie.dart';
import 'package:movie_app/models/movie_detail.dart';

void main() {
  group('Movie Model Tests', () {
    test('Movie.fromJson should parse valid json correctly', () {
      final json = {
        'Title': 'The Dark Knight',
        'Year': '2008',
        'imdbID': 'tt0468569',
        'Poster': 'https://example.com/poster.jpg',
      };

      final movie = Movie.fromJson(json);

      expect(movie.title, 'The Dark Knight');
      expect(movie.year, '2008');
      expect(movie.imdbId, 'tt0468569');
      expect(movie.poster, 'https://example.com/poster.jpg');
    });

    test('MovieDetail.fromJson should parse json correctly', () {
      final json = {
        'Title': 'Inception',
        'Year': '2010',
        'Genre': 'Action, Sci-Fi',
        'Director': 'Christopher Nolan',
        'Actors': 'Leonardo DiCaprio',
        'Plot': 'A thief who steals corporate secrets...',
        'Poster': 'https://example.com/inception.jpg',
        'imdbRating': '8.8',
      };

      final detail = MovieDetail.fromJson(json);

      expect(detail.title, 'Inception');
      expect(detail.rating, '8.8');
      expect(detail.director, 'Christopher Nolan');
    });
  });
}
