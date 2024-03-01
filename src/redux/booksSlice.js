import { createSlice } from "@reduxjs/toolkit";
import books from '../utils/books.js';

export const slice = createSlice({
  name: 'books', 
  initialState: books,
  reducers: {
    addBook(state, action) {
      // Mutate the existing state, no return value needed
      let newBook = action.payload;
      newBook.id = state.length ? Math.max(...state.map(book => book.id)) + 1 : 1;
      state.push(newBook);
    },
    eraseBook: (state, action) => {
      return state.filter(book => book.id !== action.payload);
    },
    toggleRead: (state, action) => {
      // Mutate the existing state, no return value needed
      state.map(book => {
        if (book.id == action.payload) {
          book.isRead = !book.isRead;
        }
      });
    }  
  }
})

export const { addBook, eraseBook, toggleRead } = slice.actions

export const selectBooks = state => state.books;

export default slice.reducer