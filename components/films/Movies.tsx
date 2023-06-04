import MovieCard from "@/components/films/movie-card/MovieCard";
import styles from "./Movies.module.scss";
import { useAppSelector } from "@/redux/hooks/hooks";

export type MovieType = {
  score: number;
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
  const films = useAppSelector((state) => state.movie.movies);
  const isSearched = useAppSelector((state) => state.movie.isSearched);

  return (
    <>
      <div className={styles.films}>
        {films.map((f) => (
          <MovieCard key={f.show.id} movie={f} />
        ))}
      </div>
      <div className={styles.message}>
        {isSearched
          ? films.length
            ? ""
            : "Movies list is empty... Nothing was found for this search."
          : "Let's get started. Type the show's name!"}
      </div>
    </>
  );
};
