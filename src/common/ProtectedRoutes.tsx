import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Import your custom authentication hook

interface ProtectedRouteProps {
  children: ReactNode; // Type for the children prop
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  //const { isAuthenticated } = useAuth(); // Check authentication status
  const isAuthenticated = true //TODO: Uncomment above line after devlopment


  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  console.log({isAuthenticated})

  return <>{children}</>;
}

export default ProtectedRoute;
