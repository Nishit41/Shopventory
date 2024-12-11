import React from "react";
import Header from "./Header";
import Books from "./Products";
import { Box } from "@mui/material";
import { Filter } from "../features/common/Filter";

function Dashboard() {
  return (
    <Box>
      <Header />
      <Filter />
      <Books />
    </Box>
  );
}

export default Dashboard;
