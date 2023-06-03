"use client";
import { FilmSearch } from "@/components/film-search/FilmSearch";
import { Films } from "@/components/films/Films";

export default function Home() {
  return (
    <>
      <FilmSearch />
      <Films />
    </>
  );
}
