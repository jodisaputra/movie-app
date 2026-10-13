class MovieDetail {
  final String title;
  final String year;
  final String genre;
  final String director;
  final String actors;
  final String plot;
  final String poster;
  final String rating;

  MovieDetail({
    required this.title,
    required this.year,
    required this.genre,
    required this.director,
    required this.actors,
    required this.plot,
    required this.poster,
    required this.rating,
  });

  factory MovieDetail.fromJson(Map<String, dynamic> json) {
    return MovieDetail(
      title: json['Title'] ?? 'No Title',
      year: json['Year'] ?? '-',
      genre: json['Genre'] ?? '-',
      director: json['Director'] ?? '-',
      actors: json['Actors'] ?? '-',
      plot: json['Plot'] ?? '-',
      poster: json['Poster'] ?? '',
      rating: json['imdbRating'] ?? '-',
    );
  }
}
