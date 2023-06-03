import { Film } from "@/components/films/film/Film";
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
  };
};

export const Films = () => {
  const films = useAppSelector((state) => state.film.films);

  return (
    <div className={styles.films}>
      {films.map((f) => (
        <Film key={f.show.id} film={f} />
      ))}
    </div>
  );
};
