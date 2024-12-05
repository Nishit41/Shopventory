import { useState, useEffect } from "react";
import { getBookDescription } from "../Pages/Services/DataServices";

const useBookDetails = () => {
  const [bookList, setBookList] = useState([]);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  const fetchBookDetails = async () => {
    setLoading(true);
    try {
      const bookResponse = await getBookDescription(); 
      setBookList(bookResponse?.result || []);
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

  return { bookList, error, loading };
};

export default useBookDetails;
