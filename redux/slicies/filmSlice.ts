import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilmType } from "@/components/films/Films";
import { filmApi } from "@/redux/services/api";

export const loadFilmsBySearch = createAsyncThunk(
  "film/loadFilmBySearch",
  async (text: string) => {
    const data = await filmApi.getFilmsBySearch(text);
    console.log(data);
    return data;
  }
);

const initialState = {
  films: [] as FilmType[],
};

export const filmSlice = createSlice({
  name: "filmSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadFilmsBySearch.fulfilled, (state, action) => {
      state.films = action.payload;
    });
  },
});

export const filmThunks = { loadFilmsBySearch };
