import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/movie.dart';
import '../models/movie_detail.dart';

class MovieService {
  static const String _apiKey = 'b9bd48a6';
  static const String _baseUrl = 'https://www.omdbapi.com/';

  Future<List<Movie>> fetchMovies(String query) async {
    final url = Uri.parse('$_baseUrl?apikey=$_apiKey&s=$query');

    try {
      final response = await http.get(url);

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = jsonDecode(response.body);

        if (data['Response'] == 'True') {
          final List listData = data['Search'];
          return listData.map((item) => Movie.fromJson(item)).toList();
        }
      }
      return [];
    } catch (e) {
      return _getFallbackMovies();
    }
  }

  Future<MovieDetail?> fetchMovieDetail(String imdbId) async {
    final url = Uri.parse('$_baseUrl?apikey=$_apiKey&i=$imdbId');

    try {
      final response = await http.get(url);

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = jsonDecode(response.body);
        if (data['Response'] == 'True') {
          return MovieDetail.fromJson(data);
        }
      }
      return null;
    } catch (e) {
      return _getFallbackDetail();
    }
  }

  List<Movie> _getFallbackMovies() {
    return [
      Movie(
        imdbId: 'tt0372784',
        title: 'Batman Begins',
        year: '2005',
        poster: 'https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_SX300.jpg',
      ),
      Movie(
        imdbId: 'tt0848228',
        title: 'The Avengers',
        year: '2012',
        poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGc@._V1_SX300.jpg',
      ),
    ];
  }

  MovieDetail _getFallbackDetail() {
    return MovieDetail(
      title: 'Batman Begins',
      year: '2005',
      genre: 'Action, Crime, Drama',
      director: 'Christopher Nolan',
      actors: 'Christian Bale, Michael Caine, Liam Neeson',
      plot: 'After witnessing his parents\' death, Bruce Wayne trains to fight injustice in Gotham City.',
      poster: 'https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_SX300.jpg',
      rating: '8.2',
    );
  }
}
