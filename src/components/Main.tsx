import MoviesBox from "./MoviesBox";
import Movie from "../models/movie";

interface MainProps {
  movies: Movie[];
}

export default function Main({movies}: MainProps) {
  return (
    <main className="main">
      <MoviesBox movies={movies}/>
    </main>
  );
}