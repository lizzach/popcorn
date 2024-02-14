import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main.js";
import "./index.css";
import Movie from "./models/movie";
import WatchedMovie from "./models/watchedMovie.js";
import { tempMovieData, tempWatchedData } from "./data/data.js";
import Logo from "./components/Logo.js";
import Search from "./components/Search.js";
import NumResults from "./components/NumResults.js";
import Box from "./components/Box.js";
import MoviesList from "./components/MoviesList.js";
import Summary from "./components/Summary.js";
import WatchedMoviesList from "./components/WatchedMoviesList.js";

function App() {
  const [movies, setMovies] = useState<Movie[]>(tempMovieData);
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [watched, setWatched] = useState<WatchedMovie[]>(tempWatchedData);

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery}/>
        <NumResults movies={movies}/>
      </Navbar>
      <Main>
        <Box isOpen={isOpen} setIsOpen={setIsOpen}>
          <MoviesList movies={movies} />
        </Box>
        <Box isOpen={isOpen} setIsOpen={setIsOpen}>
          <Summary watched={watched}/>
          <WatchedMoviesList watched={watched}/>
        </Box>
      </Main>
    </>
  )
}

export default App
