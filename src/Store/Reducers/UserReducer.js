import { createSlice } from "@reduxjs/toolkit";
import { userListAPI } from "../../API/ApiCalls";
// import { registerAPI } from "../../Api/Auth";
// import { nanoid } from "nanoid";

const initialState = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || [],
  userList: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.allUsers = state.allUsers.filter(
        (user) => user.email !== action.payload.email
      );
      localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
      localStorage.removeItem("loggedInUser"); // console.log(state.allUsers);
    },
    refreshAllUsers: (state) => {
      state.allUsers = JSON.parse(localStorage.getItem("allUsers"));
    },
    refreshLoggedInUser: (state) => {
      state.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userListAPI.fulfilled, (state, { payload }) => {
      // console.log(payload);
      return { ...state, userList: [payload] };
    });
  },
});

export default userSlice.reducer;
export const { refreshLoggedInUser, refreshAllUsers, deleteUser } =
  userSlice.actions;
