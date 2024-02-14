import WatchedMovie from "../models/watchedMovie";
import WatchedMovieItem from "./WatchedMovieItem";

interface WatchedMoviesListProps {
  watched: WatchedMovie[];
}

export default function WatchedMoviesList({watched}: WatchedMoviesListProps) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovieItem movie={movie} key={movie.imdbID}/>
      ))}
    </ul>
  );
}