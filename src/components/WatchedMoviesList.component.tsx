import { WatchedMovie } from "./WatchedMovie.component";
import { WatchedMovie as movie } from "../types/Movie.types";

export const WatchedMoviesList = ({ watched }: { watched: movie[] }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};
