import { createSlice } from "@reduxjs/toolkit";
import instance from "../../config/db";

const initialState = {
  bookList: [],
  error: "",
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    add(state, action) {
      state.books = [state.books, action.payload];
    },
    error(state, action) {
      state.error = action.payload;
    },
  },
});

export const add = (book) => {
  console.log(book);
  return async function (dispatch) {
    try {
      const res = await instance.post("/books", book);
      console.log(res);
      dispatch({ type: "books/add", payload: res.data });
    } catch (error) {
      dispatch({ type: "books/error", payload: error.message });
    }
  };
};

export default bookSlice.reducer;
