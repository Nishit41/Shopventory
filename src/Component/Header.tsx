import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

export const Header=()=> {
   const [showCartItems, setShowCartItems] = useState<boolean>(false);
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
     <>
     <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            <IconButton aria-label="cart" onClick={()=>setShowCartItems(true)}>
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      {
        showCartItems && (
        <Box sx={{ width:"550px", background:"orange",color:"white" }}>
          {/* Cart items */}
          cdslkfjkdsflksfklflksdflsfkl
        </Box>
        )
      }
      </>
  );
}
