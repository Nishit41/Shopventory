import { useState, useEffect } from "react";
import { getProductDetails } from "../Pages/Services/DataServices";

const useProductDetails = () => {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  const fetchBookDetails = async (id?:string) => {
    setLoading(true);
    try {
      const productResponse= await getProductDetails(); 
      setProductList(productResponse || []);
    } catch (err) {
      console.error("Error fetching book details:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  return { productList, error, loading };
};

export default useProductDetails;
