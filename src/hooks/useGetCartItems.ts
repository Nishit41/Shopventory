import { useState, useEffect } from "react";
import { getUserCart } from "../Pages/Services/DataServices";

export const useGetCartItems = (id: string) => {
  const [cartItems, setCartItems] = useState<[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  const fetchCartDetails = async (id: string) => {
    setLoading(true);
    try {
      const productResponse = await getUserCart(id);
      setCartItems(productResponse || []);
    } catch (err) {
      console.error("Error fetching book details:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartDetails(id);
  }, []);

  return { cartItems, error, loading };
};

