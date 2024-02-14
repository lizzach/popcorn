import { useState } from "react";
import Movie from "../models/movie";
import { tempMovieData } from "../data/data.js";
import Logo from "./Logo.js";

export default function Navbar() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);

  return (
    <nav className="nav-bar">
        <Logo />
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
  );
}