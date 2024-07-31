import { Movie } from "./Movie.component";
import { Movie as MovieType } from "../types/Movie.types";
// Stateful component
export const MovieList = ({ movies }: { movies: MovieType[] }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} />
      ))}
    </ul>
  );
};
