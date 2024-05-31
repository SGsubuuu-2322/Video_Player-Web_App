import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userListAPI = createAsyncThunk("user-register", async () => {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/users`
    );
    console.log(response);
    return { ...response.data };
  } catch (err) {
    console.log(err.response);
  }
});
