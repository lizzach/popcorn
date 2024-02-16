import Movie from "../models/movie";

interface MovieProps {
  movie: Movie;
  onSelectId: (id: string) => void;
}

export default function MovieItem({movie, onSelectId}: MovieProps) {
  return (
    <li key={movie.imdbID} onClick={() => onSelectId(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}