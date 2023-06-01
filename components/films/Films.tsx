import { Film } from "@/components/film/Film";

export type FilmType = {
  score: number;
  show: {
    id: number;
    url: string;
    type: string;
    genres: string[];
    status: string;
    schedule: {
      time: string;
      days: string[];
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
  };
};

type PropsType = {
  films: FilmType[];
};
export const Films = ({ films }: PropsType) => {
  return (
    <>
      {films.map((f) => (
        <Film key={f.show.id} film={f} />
      ))}
    </>
  );
};
