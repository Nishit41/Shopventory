import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  carts: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
  },
});

export const { setCarts } = cartSlice.actions;
export default cartSlice.reducer;
