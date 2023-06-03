"use client";
import { MovieSearch } from "@/components/movie-search/MovieSearch";
import { Films } from "@/components/films/Films";

export default function Home() {
  return (
    <>
      <MovieSearch />
      <Films />
    </>
  );
}
