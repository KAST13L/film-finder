import MovieCard from "@/components/films/movie-card/MovieCard";
import styles from "./films.module.scss";
import { useAppSelector } from "@/redux/hooks/hooks";

export type FilmType = {
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

export const Films = () => {
  const films = useAppSelector((state) => state.film.films);
  const isSearched = useAppSelector((state) => state.film.isSearched);

  return (
    <>
      <div className={styles.films}>
        {films.map((f) => (
          <MovieCard key={f.show.id} film={f} />
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
