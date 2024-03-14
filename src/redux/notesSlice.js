import { createSlice } from "@reduxjs/toolkit";
import notes from '../utils/notes.js';

export const slice = createSlice({
  name: 'notes', 
  initialState: notes,
  reducers: {
    addNote(state, action) {
      // Mutate the existing state, no return value needed
      let newNote = action.payload;
      newNote.id = state.length ? Math.max(...state.map(note => note.id)) + 1 : 1;
      state.push(newNote);
    },
    eraseNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },  
    eraseBookNotes: (state, action) => {
      return state.filter(note => note.book_id !== action.payload);
    }
  }
})

export const { addNote, eraseNote, eraseBookNotes } = slice.actions

export const selectNotes = state => state.notes;

export default slice.reducer