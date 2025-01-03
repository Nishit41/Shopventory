import { useState, useEffect } from "react";
import { getProductById } from "../Services/DataServices";
import { ProductList } from "../Pages/types/ProductDetails";

const useProductDetail = (id: number) => {
  const [product, setProduct] = useState<ProductList>();
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  const fetchProductDetails = async (id: number) => {
    setLoading(true);
    try {
      const productResponse = await getProductById(id);
      setProduct(productResponse || []);
    } catch (err) {
      console.error("Error fetching book details:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails(id);
  }, []);

  return { product, error, loading };
};

export default useProductDetail;
