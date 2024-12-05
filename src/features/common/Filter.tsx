import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import { Box } from "@mui/material";
export const Filter = () => (
  <Box sx={{ marginY:8, position:"fixed"}}>
    <Box sx={{ marginY: 2 }}>Books (128 items)</Box>
    <Box
      sx={{
        height: "28px",
        width: "14vw",
        border: "1px solid #DBDBDB",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <span>Sort by Relevance</span>
      <span>
        <ArrowDropDownSharpIcon></ArrowDropDownSharpIcon>
      </span>
    </Box>
  </Box>
);
