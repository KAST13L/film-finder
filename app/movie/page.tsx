"use client";
import { useAppSelector } from "@/redux/hooks/hooks";
import { SelectedMovieCard } from "@/components/selected-movie/SelectedMovieCard";
import { redirect } from "next/navigation";

export default function SelectedMovie() {
  const selectedMovie = useAppSelector((state) => state.movie.selectedMovie);
  if (!selectedMovie.show) {
    redirect("/");
  }
  return <SelectedMovieCard selectedMovie={selectedMovie} />;
}
