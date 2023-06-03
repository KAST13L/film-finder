"use client";
import { useAppSelector } from "@/redux/hooks/hooks";

export default function SelectedFilm() {
  const selectedMovie = useAppSelector((state) => state.film.selectedFilm);

  return selectedMovie.show ? <>{selectedMovie.show.name}</> : <>...</>;
}
