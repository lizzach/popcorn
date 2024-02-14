import { useState } from "react";
import WatchedMovie from "../models/watchedMovie";
import { tempWatchedData } from "../data/data.js";
import Summary from "./Summary.js";
import WatchedMoviesList from "./WatchedMoviesList.js";

export default function WatchedBox() {
  const [watched, setWatched] = useState<WatchedMovie[]>(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState<boolean>(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <Summary watched={watched}/>
          <WatchedMoviesList watched={watched}/>
        </>
      )}
    </div>
  );
}