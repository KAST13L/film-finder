import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "@/redux/slicies/movieSlice";
import { appSlice } from "@/redux/slicies/appSlice";

const rootReducer = combineReducers({
  movie: movieSlice.reducer,
  app: appSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
