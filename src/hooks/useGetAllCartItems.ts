import { useEffect, useState } from "react";
import { getAllCarts } from "../Services/cartServices";
import { useDispatch, useSelector } from "react-redux";
import { setCarts } from "../slices/cartSlice";

export const useCarts = () => {
  const { carts } = useSelector((store: any) => store.carts);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCarts = async () => {
    setIsLoading(true);
    try {
      const cartsData = await getAllCarts();
      dispatch(setCarts(cartsData));
    } catch (error) {
      console.error("Error fetching carts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!carts) {
      fetchCarts();
    }
  }, []);

  return { carts, isLoading };
};
