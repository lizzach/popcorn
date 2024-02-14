import { useState } from "react";

import Movie from "../models/movie";
import MoviesList from "./MoviesList";

interface MoviesBoxProps {
  movies: Movie[];
}

export default function MoviesBox({movies}: MoviesBoxProps) {
  const [isOpen1, setIsOpen1] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MoviesList movies={movies}/>}
    </div>
  );
}