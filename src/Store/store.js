import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/UserReducer";
import VideosReducer from "./Reducers/VideosReducer";

export const store = configureStore({
  reducer: {
    allUsers: UserReducer,
    videos: VideosReducer,
  },
});
