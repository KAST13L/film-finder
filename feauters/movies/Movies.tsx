import MovieCard from "@/feauters/movie-card/MovieCard";
import styles from "./Movies.module.scss";
import { useAppSelector } from "@/common/hooks/hooks";

export type MovieType = {
  score: number;
  isFavorite: boolean;
  show: {
    id: number;
    name: string;
    url: string;
    type: string;
    genres: string[];
    status: string;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    premiered: string;
  };
};

export const Movies = () => {
  const movies = useAppSelector((state) => state.movie.movies);
  const isSearched = useAppSelector((state) => state.movie.isSearched);

  return (
    <>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <MovieCard key={movie.show.id} movie={movie} />
        ))}
      </div>
      <div className={styles.message}>
        {isSearched
          ? movies.length
            ? ""
            : "Movies list is empty... Nothing was found for this search."
          : "Let's get started. Type the show's name!"}
      </div>
    </>
  );
};
