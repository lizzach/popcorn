import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main.js";
import "./index.css";
import Movie from "./models/movie";
import { tempMovieData } from "./data/data.js";

function App() {
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);

  return (
    <>
      <Navbar movies={movies}/>
      <Main movies={movies}/>
    </>
  )
}

export default App
