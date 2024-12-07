import { Button } from "@mui/material";

export const Counter = () => (
  <Button
    sx={{
      width: "9vw",
      height: "4vh",
      background: "none",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Button
      sx={{
        width: "1.8vw",
        height: "3.2vh",
        color: "Black",
        border: "1px solid #DBDBDB",
        borderRadius: "55px",
      }}
    >
      -
    </Button>
    <Button
      sx={{
        width: "2.8vw",
        height: "3.2vh",
        color: "Black",
        border: "1px solid #DBDBDB",
      }}
    >
      1
    </Button>
    <Button
      sx={{
        width: "1.8vw",
        height: "3.2vh",
        color: "Black",
        border: "1px solid #DBDBDB",
        borderRadius: "55px",
      }}
    >
      +
    </Button>
  </Button>
);
