export interface MovieItem {
  Title: string;
  Poster: string;
  Year: string;
  ratings?: string;
  imdbID?: string;
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Runtime: string;
  Country: string;
  Poster: string;
  imdbRating: string;
  Plot: string;
}
