"use client";
import { MovieSearch } from "@/components/movie-search/MovieSearch";
import { Movies } from "@/components/films/Movies";

export default function Home() {
  return (
    <>
      <MovieSearch />
      <Movies />
    </>
  );
}
