import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main.js";
import "./index.css";
import Movie from "./models/movie";
import { tempMovieData } from "./data/data.js";
import Logo from "./components/Logo.js";
import Search from "./components/Search.js";
import NumResults from "./components/NumResults.js";
import MoviesBox from "./components/MoviesBox.js";
import WatchedBox from "./components/WatchedBox.js";
import MoviesList from "./components/MoviesList.js";

function App() {
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery}/>
        <NumResults movies={movies}/>
      </Navbar>
      <Main>
        <MoviesBox>
          <MoviesList movies={movies} />
        </MoviesBox>
        <WatchedBox />
      </Main>
    </>
  )
}

export default App
