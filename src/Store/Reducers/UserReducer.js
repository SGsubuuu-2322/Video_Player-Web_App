import { createSlice } from "@reduxjs/toolkit";
// import { registerAPI } from "../../Api/Auth";
// import { nanoid } from "nanoid";

const initialState = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  loggedInUser: JSON.parse(localStorage.getItem("loggedInUser")) || [],
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
  // extraReducers: (builder) => {
  //   builder.addCase(registerAPI.fulfilled, (state, action) => {
  //     action.payload.id = nanoid();
  //     action.payload.profileImg =
  //       "https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png";
  //     state.allUsers = [...state.allUsers, action.payload];
  //     localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
  //   });
  // },
});

export default userSlice.reducer;
export const { refreshLoggedInUser, refreshAllUsers, deleteUser } =
  userSlice.actions;
