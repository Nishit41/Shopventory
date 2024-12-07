import { configureStore } from '@reduxjs/toolkit';
import productreducer from '../features/productSlice';

const store = configureStore({
  reducer: {
    book: productreducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
