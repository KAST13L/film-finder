import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.tvmaze.com/",
});

export const filmApi = {
  getFilmsBySearch(text: string) {
    return instance.get(`search/shows?q=${text}`).then((res) => res.data);
  },
};
