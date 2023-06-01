"use client";
import { FilmSearch } from "@/components/film-search/FilmSearch";
import { useState } from "react";
import { Films } from "@/components/films/Films";

export default function Home() {
  const [films, setFilms] = useState([]);

  return (
    <div>
      <FilmSearch onSearch={setFilms} />
      <Films films={films} />
    </div>
  );
}
