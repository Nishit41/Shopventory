import Header from "../Component/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
