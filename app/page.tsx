"use client";
import { FilmSearch } from "@/components/film-search/FilmSearch";
import { useState } from "react";
import { Films } from "@/components/films/Films";

export default function Home() {
  const [films, setFilms] = useState([]);

  return (
    <>
      Film finder!
      <div>
        <FilmSearch onSearch={setFilms} />
      </div>
      <div>
        <Films films={films} />
      </div>
    </>
  );
}
