import { useState } from "react";
import Movie from "../models/movie";
import { tempMovieData } from "../data/data.js";
import Logo from "./Logo.js";
import Search from "./Search.js";
import NumResults from "./NumResults.js";

export default function Navbar() {
  const [query, setQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);

  return (
    <nav className="nav-bar">
        <Logo />
        <Search query={query} setQuery={setQuery}/>
        <NumResults movies={movies}/>
    </nav>
  );
}