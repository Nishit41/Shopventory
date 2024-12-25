import {createSlice} from "@reduxjs/toolkit";

interface Products{
        id:number,
        title:string,
        price:string,
        category:string,
        description:string,
        image:string
}


const initialState  = {
  products: []  
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action)=> {
          state.products = action.payload
        }
    }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer