import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmType } from "@/components/films/Films";
import { filmApi } from "@/redux/services/api";

export const loadFilmsBySearch = createAsyncThunk(
  "movie-card/loadFilmBySearch",
  async (text: string, { rejectWithValue }) => {
    const res = await filmApi.getFilmsBySearch(text);
    if (res.length) {
      return res;
    } else {
      return rejectWithValue({});
    }
  }
);

const initialState = {
  films: [] as FilmType[],
  selectedFilm: {} as FilmType,
  isSearched: false,
};

export const filmSlice = createSlice({
  name: "filmSlice",
  initialState: initialState,
  reducers: {
    getFilmById(state, action: PayloadAction<{ filmId: number }>) {
      const selectedFilmIndex = state.films.findIndex(
        (f) => f.show.id === action.payload.filmId
      );
      state.selectedFilm = state.films[selectedFilmIndex];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFilmsBySearch.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isSearched = true;
      })
      .addCase(loadFilmsBySearch.rejected, (state, action) => {
        state.films = [];
      });
  },
});

export const filmThunks = { loadFilmsBySearch };
export const filmActions = filmSlice.actions;
