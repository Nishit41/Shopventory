import { Button } from "@mui/material";
import { addItemToCart } from "../Pages/Services/DataServices";
import { useState } from "react";

export interface CartPayload {
  productId: number;
  quantity: number;
}

export const Counter = ({ product }: any) => {
  const [count, setCount] = useState<number>(0);
  let userId = 1; // TODO: userID be replaced with user
  const cartProducts: CartPayload[] = [];
  const addToCart = async (quantity: number) => {
    setCount(quantity);
    cartProducts.push({ productId: product?.id, quantity: quantity });
    await addItemToCart(userId, cartProducts);
  };

  return (
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
        onClick={() => {
          count > 0 && addToCart(count - 1);
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
        {count}
      </Button>
      <Button
        sx={{
          width: "1.8vw",
          height: "3.2vh",
          color: "Black",
          border: "1px solid #DBDBDB",
          borderRadius: "55px",
        }}
        onClick={() => addToCart(count + 1)}
      >
        +
      </Button>
    </Button>
  );
};
