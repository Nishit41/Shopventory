import { configureStore } from "@reduxjs/toolkit";
import productreducer from "../features/productSlice";
import cartreducer from "../slice/cartSlice";

const store = configureStore({
  reducer: {
    book: productreducer,
    carts: cartreducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
