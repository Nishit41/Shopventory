import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    selectedBook: null,
  },
  reducers: {
    setBookDetails: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
});

export const { setBookDetails } = bookSlice.actions;
export default bookSlice.reducer;
