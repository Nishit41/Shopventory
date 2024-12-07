import React, { useEffect, useState } from "react";
import {
  add__item_to_wishListApi,
  add_cart_item_api,
  get_cart_Item_api,
} from "../Services/DataServices";
import { EMPTY_STRING } from "../utils/constant";
import { Product } from "../../features/Product";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import { ProductList } from "../types/ProductDetails";
import useProductDetails from "../../hooks/useProductDetails";

const Products = () => {
  const { productList, error, loading } = useProductDetails();
  //TODO: error component , loading -simmerUI
  const [counterDisplay, setCounter] = useState<boolean>(true);
  const [id, setid] = useState<number>();



  function counter() {
    setCounter(false);
    add_cart_item_api(id).catch((err: any) => console.log(err));
  }

  function addToWishList() {
    add__item_to_wishListApi(id)
      .then((resp: any) => console.log(resp, "response from add to wishlist"))
      .catch((err: any) => console.log(err));
  }
  const get_cart_Item = () => {
    get_cart_Item_api().then(
      (resp: any) => console.log("resp")
      // setDataAddedInCart(resp.data.result)
    );
  };

  return (
      <Box
        sx={{
          width: "60vw",
          marginLeft: "18vw",
          marginRight: "20vw",
          display: "flex",
          gap: "14px",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "100px"
        }}
      >
        {productList?.map((product: ProductList ) => (
          <Product
            product={product}
            key={product?.id}
          />
        ))}
      </Box>
  );
};

export default Products;
