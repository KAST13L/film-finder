import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieType } from "@/feauters/movies/Movies";
import { movieApi } from "@/common/services/api";
import {
  getFavoriteMovies,
  toggleIsFavoriteMovieLocalStorage,
} from "@/common/utils/localeStorage";

export const getMoviesBySearch = createAsyncThunk(
  "movie-card/getMoviesBySearch",
  async (search: string, { rejectWithValue }) => {
    const res = await movieApi.getMoviesBySearch(search);
    const prevState = getFavoriteMovies() as MovieType[];

    const transformedState = res.map((movie) => ({
      ...movie,
      isFavorite: prevState.some((m) => m.show.id === movie.show.id),
    }));

    if (transformedState.length) {
      return transformedState;
    } else {
      return rejectWithValue({});
    }
  }
);

export const loadFavoriteMovies = createAsyncThunk(
  "movies/getFavoriteMovies",
  () => {
    return getFavoriteMovies();
  }
);

export const toggleIsFavorite = createAsyncThunk(
  "movies/toggleIsFavorite",
  (movie: MovieType, {}) => {
    toggleIsFavoriteMovieLocalStorage(movie);
    return { movie };
  }
);

const initialState = {
  movies: [] as MovieType[],
  favoriteMovies: [] as MovieType[],
  selectedMovie: {} as MovieType,
  isSearched: false,
};

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState: initialState,
  reducers: {
    getMovieById(state, action: PayloadAction<{ movieId: number }>) {
      const selectedMovieIndex = state.movies.findIndex(
        (m) => m.show.id === action.payload.movieId
      );
      state.selectedMovie = state.movies[selectedMovieIndex];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesBySearch.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.isSearched = true;
      })
      .addCase(getMoviesBySearch.rejected, (state) => {
        state.movies = [];
      })
      .addCase(loadFavoriteMovies.fulfilled, (state, action) => {
        state.favoriteMovies = action.payload;
      })
      .addCase(toggleIsFavorite.fulfilled, (state, action) => {
        const index = state.movies.findIndex(
          (m) => m.show.id === action.payload?.movie.show.id
        );
        if (state.movies[index]) {
          state.movies[index].isFavorite = !state.movies[index].isFavorite;
        }
        const favoriteIndex = state.favoriteMovies.findIndex(
          (m) => m.show.id === action.payload?.movie.show.id
        );
        if (state.favoriteMovies[favoriteIndex]) {
          state.favoriteMovies[favoriteIndex].isFavorite =
            !state.favoriteMovies[favoriteIndex].isFavorite;
        }
        state.favoriteMovies.filter(
          (m) => m.show.id === action.payload.movie.show.id
        );
        state.selectedMovie.isFavorite = !state.selectedMovie.isFavorite;
      });
  },
});

export const movieThunks = {
  toggleIsFavorite,
  loadFavoriteMovies,
  getMoviesBySearch,
};
export const movieActions = movieSlice.actions;
