import { useState, useEffect } from "react";
import { getProductDetails } from "../Services/DataServices";
import { useDispatch } from "react-redux";
import { setProducts } from "../slices/productsSlice";

const useProductDetails = () => {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (id?:string) => {
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
    fetchProducts();
  }, []); 

   useEffect(() => {
      if (productList) {
        dispatch(setProducts(productList));
      }
    }, [productList, dispatch]);

  return { productList, error, loading };
};

export default useProductDetails;
