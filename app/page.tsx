"use client";
import { MovieSearch } from "@/feauters/movie-search/MovieSearch";
import { Movies } from "@/feauters/movies/Movies";
import { useEffect } from "react";
import { useAppSelector } from "@/common/hooks/hooks";
import { useActions } from "@/common/hooks/useActions";
import { movieThunks } from "@/redux/slicies/movieSlice";

export default function Home() {
  const movie = useAppSelector((state) => state.movie.movies);
  const { loadFavoriteMovies } = useActions(movieThunks);
  useEffect(() => {
    loadFavoriteMovies();
  }, [movie]);
  return (
    <>
      <MovieSearch />
      <Movies />
    </>
  );
}
