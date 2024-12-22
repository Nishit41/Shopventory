import { Box } from "@mui/material";
import { useCarts } from "../hooks/useGetAllCartItems";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCarts } from "../slice/cartSlice";

export const CartItems = () => {
  const dispatch = useDispatch();

  // Fetch cart items from API
  const { isLoading, carts } = useCarts();
  useEffect(() => {
    if(!isLoading && carts) {
    dispatch(setCarts(carts as any));
    }
  }, [carts]);

  return <Box sx={{ marginTop: 10 }}>CartItems</Box>;
};
