import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// the createAsyncThunk's parameter describes the base type that describes purpose of the request
// the redux toolkit takes the string parameter and do something like : 'users/fetch/pending' as per the requests
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  //  Dev only
  await pause(1000);

  //  the returned data is used in the user slice
  // whatever we are returning here is going to be the payload property of the action
  return response.data;
  // In case of any error, the action object is given a new property called error which can be accessed in the slice. error is an object
});

// DEV ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

// the fetchUsers fun will have three properties - fetchUsers.pending, fetchUsers.fulfilled, fetchusers.rejected

export { fetchUsers };
