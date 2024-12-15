import Books from "./Products";
import { Box } from "@mui/material";
import { Filter } from "../features/common/Filter";

function Dashboard() {
  return (
    <Box>
      <Filter />
      <Books />
    </Box>
  );
}

export default Dashboard;
