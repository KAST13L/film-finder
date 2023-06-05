import { MovieType } from "@/components/films/Movies";

const FAVORITE = "favorite";
export const saveFavoriteMovies = (data: MovieType[]) => {
  if (!window || !window.localStorage) {
    return;
  }
  window.localStorage.setItem(FAVORITE, JSON.stringify(data));
};

export const getFavoriteMovies = () => {
  if (!window || !window.localStorage) {
    return null;
  }
  try {
    return localStorage.getItem(FAVORITE) !== null
      ? // @ts-ignore
        JSON.parse(window.localStorage.getItem(FAVORITE))
      : [];
  } catch (e) {
    console.error(e);
    return null;
  }
};
