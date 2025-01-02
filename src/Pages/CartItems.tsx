import { Box } from "@mui/material";
import { useCarts } from "../hooks/useGetAllCartItems";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCarts } from "../slices/cartSlice";
import { CartDetails } from "../Component/CartDetails";
import { ICart } from "../common/types/CartDetails";

export const CartItems = () => {
  const { isLoading, carts } = useCarts();
  isLoading && <>Loading...</>
  return carts?.map((cart:ICart) =><>{JSON.stringify(cart)} 
  <CartDetails key={2} cart={cart} />
  </>);
};
