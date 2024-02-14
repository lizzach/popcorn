import { useState } from "react";
import Movie from "../models/movie";
import { tempMovieData } from "../data/data.js";
import Logo from "./Logo.js";
import Search from "./Search.js";

export default function Navbar() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);

  return (
    <nav className="nav-bar">
        <Logo />
        <Search query={query} setQuery={setQuery}/>
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav>
  );
}