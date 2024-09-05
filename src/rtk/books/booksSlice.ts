/* eslint-disable @typescript-eslint/no-explicit-any */
// src/rtk/books/booksSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BASE_URL } from '../../Shared/constant/Api';

// Define the type for the state
interface BooksState {
  items: Array<any>; 
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null; 
}

// Thunk for fetching books
export const fetchBooks = createAsyncThunk('fetchBooks', async () => {
    const response = await fetch(`${BASE_URL}/book`);
    const data = await response.json();
    console.log(data.data);
    return data.data; // Ensure data is an array
  });
  

// Define the initial state using the BooksState type
const initialState: BooksState = {
  items: [],
  status: 'idle',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch books'; // Provide a fallback string
      });
  },
});

export default booksSlice.reducer;
