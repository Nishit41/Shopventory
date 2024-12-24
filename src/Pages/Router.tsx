import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../Pages/Credental";
import Dashboard from "../Component/Dashboard";
import { ProductDetails } from "../Component/ProductDetails";
import Layout from "../Component/Layout"; // Import the Layout component
import { CartItems } from "./CartItems";
import ProtectedRoute from "../common/ProtectedRoutes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route without the Header */}
        <Route path="/" element={<SignIn />} /> 

        {/* Routes with the Header */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          {/* Protected child routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartItems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
