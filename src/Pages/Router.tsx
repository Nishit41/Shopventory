import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../Pages/Credental";
import Dashboard from "./Component/Dashboard";
import { BookDetails } from "./Component/BookComponent";
import Layout from "./Component/Layout"; // Import the Layout component

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route without the Header */}
        <Route path="/" element={<SignIn />} />

        {/* Routes with the Header */}
        <Route element={<Layout />}>
          {/* Pass child routes here */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookdetails/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
