import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../api/userApi";

const fetchBookmarkUser = () => {
  const result = localStorage.getItem("user");
  const data = result ? JSON.parse(result) : [];
  return data;
};

fetchBookmarkUser();

const initialState = {
  users: [],
  isLoading: false,
  isError: "",
  bookmarkUser: fetchBookmarkUser(),
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userBookmark(state, action) {
      state.bookmarkUser = [action.payload, ...state.bookmarkUser];
      localStorage.setItem("user", JSON.stringify(state.bookmarkUser));
    },

    bookmarkedUser(state, action) {
      const bookmarkedUser = state.bookmarkUser.filter(
        (user) => user.id !== action.payload.id
      );

      state.bookmarkUser = bookmarkedUser;
      localStorage.setItem("user", JSON.stringify(state.bookmarkUser));
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        const error = action.error.message;
        state.isError = error;
        state.isLoading = false;
      });
  },
});

export const { userBookmark, bookmarkedUser } = userSlice.actions;
export const useUsers = (state) => state.users.users;
export const error = (state) => state.users.isError;
export const loading = (state) => state.users.isLoading;
export const bookMarkUsr = (state) => state.users.bookmarkUser;

export default userSlice.reducer;
