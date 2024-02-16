import { useState, useEffect } from "react";

const KEY = import.meta.env.VITE_API_KEY;

interface MovieDetailsProps {
  id: string;
  onCloseMovie: () => void;
}

export default function MovieDetails({id, onCloseMovie}: MovieDetailsProps) {
  const [movie, setMovie] = useState({});

  const {
    Title: title, 
    Year: year, 
    Poster: poster, 
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(function () {
    async function getMovieDetails() {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${id}`);
        const data = await res.json();
        setMovie(data);
    }
    getMovieDetails();
  }, [id])

  return (
    <div className="details">
      <header>
      <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
      <img src={poster} alt={`Poster of ${movie} movie`} />
      <div className="details-overview">
        <h2>{title}</h2>
        <p>{released} &bull; {runtime}</p>
        <p>{genre}</p>
        <p>
          <span>⭐️</span>
          {imdbRating} IMDb rating
        </p>
      </div>
      </header>

      <section>
        <p><em>{plot}</em></p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
      {id}
    </div>
  );
}