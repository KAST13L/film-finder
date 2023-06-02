import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmSlice } from "@/redux/slicies/filmSlice";

const rootReducer = combineReducers({
  film: filmSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
