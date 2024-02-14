import Movie from "../models/movie";
import MovieItem from "./MovieItem";

interface MoviesListProps {
  movies: Movie[];
}

export default function MoviesList({movies}: MoviesListProps) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID}/>
      ))}
    </ul>
  );
}