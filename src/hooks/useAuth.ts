import { useState, useEffect } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token)
    setIsAuthenticated(!!token); 
  }, []);

  console.log("authen",isAuthenticated);

  return { isAuthenticated };
}
