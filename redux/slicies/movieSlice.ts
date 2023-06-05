import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieType } from "@/components/films/Movies";
import { movieApi } from "@/common/services/api";

export const getMoviesBySearch = createAsyncThunk(
  "movie-card/getMoviesBySearch",
  async (search: string, { rejectWithValue }) => {
    const res = await movieApi.getMoviesBySearch(search);

    const transformedState = res.map((movie) => ({
      ...movie,
      isFavorite: false,
    }));

    if (transformedState.length) {
      return transformedState;
    } else {
      return rejectWithValue({});
    }
  }
);

const initialState = {
  movies: [] as MovieType[],
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
      });
  },
});

export const movieThunks = { loadFilmsBySearch: getMoviesBySearch };
export const movieActions = movieSlice.actions;
