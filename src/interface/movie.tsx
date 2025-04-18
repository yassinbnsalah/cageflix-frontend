interface Movie {
  tconst: string;
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  genres: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country?: string;
  awards?: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  dvd?: string;
  boxOffice?: string;
  production?: string;
  website?: string;
  response?: string;
  poster: string;
  watchlisted: boolean;
  rating: string;
  description: string;
  ratings: Array<{
    Source: string;
    Value: string;
  }>;
  metascore?: string;

  tmdb_id?: number;

  trailers?: Array<{
    name: string;
    site: string;
    type: string;
    key: string;
    url: string;
  }>;
}
