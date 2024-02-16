import Movie from "../models/movie";
import MovieItem from "./MovieItem";

interface MoviesListProps {
  movies: Movie[];
  onSelectId: (id: string) => void;
}

export default function MoviesList({movies, onSelectId}: MoviesListProps) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieItem movie={movie} key={movie.imdbID} onSelectId={onSelectId}/>
      ))}
    </ul>
  );
}