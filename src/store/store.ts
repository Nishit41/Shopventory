import { configureStore } from '@reduxjs/toolkit';
import bookreducer from '../features/BookSlice';

const store = configureStore({
  reducer: {
    book: bookreducer,
  },
});

export default store;
