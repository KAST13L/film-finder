import { MovieType } from "@/feauters/movies/Movies";

const FAVORITE = "favoriteMovies";
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

export const deleteJokeFromLocaleStorage = (movieId: number) => {
  let prevState: MovieType[] = getFavoriteMovies();
  if (prevState.some((m) => m.show.id === movieId)) {
    prevState = prevState.filter((m) => m.show.id !== movieId);
    saveFavoriteMovies(prevState);
  }
};

export const toggleIsFavoriteMovieLocalStorage = (movie: MovieType) => {
  let prevState: MovieType[] = getFavoriteMovies();
  if (movie.isFavorite) {
    deleteJokeFromLocaleStorage(movie.show.id);
  } else {
    prevState = prevState.concat({ ...movie, isFavorite: true });
    saveFavoriteMovies(prevState);
  }
};
