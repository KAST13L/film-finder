import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilmType } from "@/components/films/Films";
import { filmApi } from "@/redux/services/api";

export const loadFilmsBySearch = createAsyncThunk(
  "film/loadFilmBySearch",
  async (text: string) => {
    return await filmApi.getFilmsBySearch(text);
  }
);

const initialState = {
  films: [] as FilmType[],
  selectedFilm: {} as FilmType,
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
    builder.addCase(loadFilmsBySearch.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});

export const filmThunks = { loadFilmsBySearch };
export const filmActions = filmSlice.actions;
