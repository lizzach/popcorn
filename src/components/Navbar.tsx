import { useState } from "react";
import Movie from "../models/movie";
import { tempMovieData } from "../data/data.js";
import Logo from "./Logo.js";
import Search from "./Search.js";
import NumResults from "./NumResults.js";

interface NavbarProps {
  movies: Movie[];
}

export default function Navbar({movies}: NavbarProps) {
  const [query, setQuery] = useState<string>("");

  return (
    <nav className="nav-bar">
        <Logo />
        <Search query={query} setQuery={setQuery}/>
        <NumResults movies={movies}/>
    </nav>
  );
}