"use client";
import { useAppSelector } from "@/common/hooks/hooks";
import styles from "@/feauters/movies/Movies.module.scss";
import MovieCard from "@/feauters/movie-card/MovieCard";
import { useActions } from "@/common/hooks/useActions";
import { movieThunks } from "@/redux/slicies/movieSlice";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function FavoriteMovies() {
  const favoriteMovies = useAppSelector((state) => state.movie.favoriteMovies);
  const movie = useAppSelector((state) => state.movie.movies);

  const { loadFavoriteMovies } = useActions(movieThunks);
  useEffect(() => {
    loadFavoriteMovies();
  }, [movie]);

  if (!favoriteMovies.length) {
    redirect("/");
  }

  return (
    <>
      <div className={styles.movies}>
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.show.id} movie={movie} />
        ))}
      </div>
    </>
  );
}
