import { createSlice } from "@reduxjs/toolkit";
import { ProductList } from "../Pages/types/ProductDetails";

interface ProductState {
  selectedProduct: ProductList | null;
}

const initialState: ProductState = {
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProductDetails } = productSlice.actions;
export default productSlice.reducer;
