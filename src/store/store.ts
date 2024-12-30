import { configureStore } from "@reduxjs/toolkit";
import productreducer from "../features/productSlice";
import cartreducer from "../slices/cartSlice";
import productsreducer from "../slices/productsSlice";

const store = configureStore({
  reducer: {
    book: productreducer,
    products: productsreducer,
    carts: cartreducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
