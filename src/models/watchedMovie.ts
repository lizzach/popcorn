import Movie from "./movie";

export default interface WatchedMovie extends Movie {
  runtime: number;
  imdbRating: number;
  userRating: number;
}