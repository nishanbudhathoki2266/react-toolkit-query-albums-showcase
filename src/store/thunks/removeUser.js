import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // Fixed the problem - instead of returning response data with empty payload, we returun user here so we can use user in the reducers to know which user to delete
  return user;
});

export { removeUser };
