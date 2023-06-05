"use client";
import { useAppSelector } from "@/common/hooks/hooks";
import styles from "@/feauters/movies/Movies.module.scss";
import MovieCard from "@/feauters/movie-card/MovieCard";
import { useActions } from "@/common/hooks/useActions";
import { movieThunks } from "@/redux/slicies/movieSlice";
import { useEffect } from "react";

export default function FavoriteMovies() {
  const favoriteMovies = useAppSelector((state) => state.movie.favoriteMovies);
  const { loadFavoriteMovies } = useActions(movieThunks);
  useEffect(() => {
    loadFavoriteMovies();
  }, [favoriteMovies.length]);
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
