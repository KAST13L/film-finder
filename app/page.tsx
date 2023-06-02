"use client";
import { FilmSearch } from "@/components/film-search/FilmSearch";
import { useState } from "react";
import { Films } from "@/components/films/Films";
import { useAppSelector } from "@/redux/hooks/hooks";

export default function Home() {
  const [isCallApi, setIsCallApi] = useState(false);

  const films = useAppSelector((state) => state.film.films);

  return (
    <div>
      <FilmSearch setIsCallApi={setIsCallApi} />
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
