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
      state.bookList = [...state.bookList, action.payload];
    },
    load(state, action) {
      state.bookList = action.payload;
    },
    remove(state, action) {
      state.bookList = action.payload;
    },
    error(state, action) {
      state.error = action.payload;
    },
  },
});

export const add = (book) => {
  return async function (dispatch) {
    try {
      const res = await instance.post("/books", book);
      dispatch({ type: "books/add", payload: res.data });
    } catch (error) {
      dispatch({ type: "books/error", payload: error.message });
    }
  };
};

export const load = () => {
  return async function (dispatch) {
    try {
      const res = await instance.get("/books");
      dispatch({ type: "books/load", payload: res.data });
    } catch (error) {
      dispatch({ type: "books/error", payload: error.message });
    }
  };
};

export const remove = (id) => {
  return async function (dispatch, getState) {
    try {
      await instance.delete(`/books/${id}`);
      const currentState = getState().books;
      const books = currentState.bookList.filter((book) => book.id !== id);
      dispatch({ type: "books/remove", payload: books });
    } catch (error) {
      dispatch({ type: "books/error", payload: error.message });
    }
  };
};

export const update = (book) => {
  return async function (dispatch, getState) {
    await instance.put(`/books/${book.id}`, book);
    const books = getState().books.bookList.map((item) => {
      if (item.id === book.id) {
        return book;
      } else {
        return item;
      }
    });
    dispatch({ type: "books/update", payload: books });
  };
};

export default bookSlice.reducer;
