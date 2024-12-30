import { useState, useEffect } from "react";
import { getProductDetails } from "../Services/DataServices";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../slices/productsSlice";

const useProductDetails = () => {
  const {products:productList} = useSelector(((store:any)=>store.products))
  const dispatch = useDispatch();
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (id?:string) => {
    setLoading(true);
    try {
      const productResponse= await getProductDetails(); 
      dispatch(setProducts(productResponse))      
    } catch (err) {
      console.error("Error fetching book details:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if(productList.length === 0){
    fetchProducts();
    }
  }, []); 

  return { productList, error, loading };
};

export default useProductDetails;
