"use client";
import { MovieSearch } from "@/feauters/movie-search/MovieSearch";
import { Movies } from "@/feauters/movies/Movies";

export default function Home() {
  return (
    <>
      <MovieSearch />
      <Movies />
    </>
  );
}
