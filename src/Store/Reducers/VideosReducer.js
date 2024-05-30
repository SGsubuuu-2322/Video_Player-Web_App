import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  bookmarked: [],
  status: "idle",
  error: null,
  currentVideo: null,
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
      const isVideoBookmarked = state.bookmarked.some(
        (bookmark) => bookmark.id === video.id
      );

      if (video && !isVideoBookmarked) {
        return {
          ...state,
          bookmarked: [...state.bookmarked, video],
          videos: state.videos.map((v) =>
            v.id === video.id ? { ...v, isBookMarked: true } : v
          ),
        };
      } else if (isVideoBookmarked) {
        return {
          ...state,
          bookmarked: state.bookmarked.filter(
            (bookmark) => bookmark.id !== video.id
          ),
          videos: state.videos.map((v) =>
            v.id === video.id ? { ...v, isBookMarked: false } : v
          ),
        };
      }
      return state;
    },

    deleteVideo: (state, { payload }) => {
      return {
        ...state,
        videos: state.videos.filter((video) => video.id !== payload),
        bookmarked: state.bookmarked.filter(
          (bookmark) => bookmark.id !== payload
        ),
      };
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addVideo, bookmarkVideo, deleteVideo, setStatus, setError } =
  videosSlice.actions;

export default videosSlice.reducer;
