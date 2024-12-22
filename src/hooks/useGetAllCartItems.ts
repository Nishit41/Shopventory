import { useEffect, useState } from "react";
import { getAllCarts } from "../Services/cartServices";

export const useCarts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [carts, setCarts] = useState<any[]>([]); // Replace `any[]` with the appropriate type if known

  const fetchCarts = async () => {
    setIsLoading(true);
    try {
      const cartsData = await getAllCarts();
      setCarts(cartsData);
    } catch (error) {
      console.error("Error fetching carts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  console.log("carts=>",carts);

  return { carts, isLoading };
};
