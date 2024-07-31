import { Movie } from "../types/Movie.types";

// Stateless component
export const NumResults = ({ movies }: { movies: Movie[] }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};
