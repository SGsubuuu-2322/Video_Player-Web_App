import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userListAPI = createAsyncThunk("user-register", async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    // console.log(response.data);
    return { ...response.data };
  } catch (err) {
    console.log(err.response);
  }
});
