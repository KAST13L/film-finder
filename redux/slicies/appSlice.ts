import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadFilmsBySearch } from "@/redux/slicies/filmSlice";

// types
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";
export type InitialAppStateType = {
  status: RequestStatusType;
  error: string | null;
  success: string | null;
};

export const appSlice = createSlice({
  name: "app",
  initialState: {
    status: "idle",
    error: null,
    success: null,
  } as InitialAppStateType,
  reducers: {
    setAppError(state, action: PayloadAction<{ error: string | null }>) {
      state.error = action.payload.error;
      state.status = "failed";
    },
    setAppSuccess(state, action: PayloadAction<{ success: string | null }>) {
      state.success = action.payload.success;
      state.status = "succeeded";
    },
    setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadFilmsBySearch.fulfilled, (state) => {
        state.success = "Search done!";
      })
      .addCase(loadFilmsBySearch.rejected, (state) => {
        state.error = "Nothing was found for this search.";
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.status = "succeeded";
        }
      );
  },
});

export const appActions = appSlice.actions;