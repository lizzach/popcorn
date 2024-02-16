import { useState, useEffect } from "react";
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
import Loader from "./components/Loader.js";
import ErrorMsg from "./components/ErrorMsg.js";

const KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [watched, setWatched] = useState<WatchedMovie[]>(tempWatchedData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");
  const queryTest = "Dune";

  useEffect(function() {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

        if (!res.ok) {
          throw new Error("Error loading movie data");
        }
        
        const data = await res.json();
        if (data.Response === "False") {
          throw new Error ("Movie not found");
        }

        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
    }
    fetchMovies();
  }, [query])

  console.log(query);

  return (
    <>
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery}/>
        <NumResults movies={movies}/>
      </Navbar>
      <Main>
        <Box isOpen={isOpen} setIsOpen={setIsOpen}>
          {isLoading && <Loader />}
          {!isLoading && !error && <MoviesList movies={movies} />}
          {error && <ErrorMsg error={error} />}
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
