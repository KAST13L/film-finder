import { FilmType } from "@/components/films/Films";

type PropsType = {
  film: FilmType;
};
export const Film = ({ film }: PropsType) => {
  return (
    <>
      <div>{film.show.id}</div>
      <div>{film.show.status}</div>
      <div>{film.show.summary}</div>
      <hr />
    </>
  );
};
