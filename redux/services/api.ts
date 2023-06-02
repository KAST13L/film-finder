import axios from "axios";
import { FilmType } from "@/components/films/Films";

export const instance = axios.create({
  baseURL: "https://api.tvmaze.com/",
});

export const filmApi = {
  getFilmsBySearch(text: string) {
    return instance
      .get<{ text: string }, { data: FilmType[] }>(`search/shows?q=${text}`)
      .then((res) => res.data);
  },
};
