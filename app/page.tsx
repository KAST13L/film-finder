"use client";
import { FilmSearch } from "@/components/film-search/FilmSearch";
import { Films } from "@/components/films/Films";
import { useAppSelector } from "@/redux/hooks/hooks";

export default function Home() {
  const films = useAppSelector((state) => state.film.films);

  return (
    <div>
      <FilmSearch />
      <Films films={films} />
    </div>
  );
}
