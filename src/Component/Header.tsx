import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Cart } from "../features/Cart";

export const Header = () => {
  const [showCartItems, setShowCartItems] = useState<boolean>(false);
  console.log("showCartItems", showCartItems);

  return (
    <>
      <AppBar position="fixed">
        {/* <Box sx={{display:"flex", alignItems:"center"}}> */}
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
          <MenuIcon />
          {/* </IconButton> */}
          <Cart />
        </Toolbar>
        {/* </Box> */}
      </AppBar>
    </>
  );
};
