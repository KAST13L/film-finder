import axios from "axios";
import { MovieType } from "@/feauters/movies/Movies";

export const instance = axios.create({
  baseURL: "https://api.tvmaze.com/",
});

export const movieApi = {
  getMoviesBySearch(search: string) {
    return instance
      .get<{ search: string }, { data: MovieType[] }>(
        `search/shows?q=${search}`
      )
      .then((res) => res.data);
  },
};
