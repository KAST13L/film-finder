"use client";
import { FilmSearch } from "@/components/film-search/FilmSearch";
import { useState } from "react";
import { Films } from "@/components/films/Films";

export default function Home() {
  const [films, setFilms] = useState([]);
  const [isCallApi, setIsCallApi] = useState(false);

  return (
    <div>
      <FilmSearch onSearch={setFilms} setIsCallApi={setIsCallApi} />
      <Films films={films} />
      <h1>
        {isCallApi
          ? films.length
            ? ""
            : "Sorry, nothing found with this search"
          : "Type the show's name"}
      </h1>
    </div>
  );
}
