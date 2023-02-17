import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GITHUB_URL = "https://api.github.com";

export const getUsers = createAsyncThunk("getUsers/users", async () => {
  try {
    const { data } = await axios.get(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: process.env.REACT_APP_TOKEN,
      },
    });
    return data;
  } catch (error) {
    if (error.code === "ERR_NETWORK") {
      throw new Error("Check your internet connection, Try again!");
    }

    if (error.response.status === 404) {
      throw new Error("Bad request, server could not find!");
    }

    if (error.response.status === 403) {
      throw new Error("API rate limit exceeded,Try after some time");
    }
  }
});
