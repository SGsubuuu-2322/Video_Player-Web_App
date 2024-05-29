import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  bookmarked: [],
  status: "idle",
  error: null,
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.videos.push(action.payload);

      // console.log(state.videos);
    },
    bookmarkVideo: (state, action) => {
      const video = state.videos.find((video) => video.id === action.payload);
      if (video && !state.bookmarked.includes(video)) {
        state.bookmarked.push(video);
      }
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addVideo, bookmarkVideo, setStatus, setError } =
  videosSlice.actions;

export default videosSlice.reducer;
