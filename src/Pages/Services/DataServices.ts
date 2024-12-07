import axios from "axios";
import { headerConfig } from "../utils/constant";
import { ProductList } from "../types/ProductDetails";


export const getProductDetails = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching book description:", error);
    throw error;
  }
};

export const getProductById = async (id: string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching book description:", error);
    throw error;
  }
};

export const addItemToCart = async (userId :string, productId: ProductList, products: ProductList[] ) => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId,
        date,
        products
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching book description:", error);
    throw error;
  }
};

export const add_item_to_wishListApi = (id: any) => {
  let response = axios.post(
    `https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${id}`,
    id,
    headerConfig
  );
  return response;
};

export const get_cart_Item_api = () => {
  let response = axios.get(
    "https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items",
    headerConfig
  );
  return response;
};

export const customerDetailsApi = (addressObj: any) => {
  console.log("address obj", addressObj);
  let response = axios.put(
    "https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user",
    {
      addressType: addressObj.addressType,
      fullAddress: addressObj.fullAddress,
      city: addressObj.city,
      state: addressObj.state,
    },
    headerConfig
  );
  return response;
};

export const cartQuantityApi = (cardQuantityObj: any, _id: any) => {
  let response = axios.put(
    `https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${_id}`,
    { quantityToBuy: cardQuantityObj.quantity },
    headerConfig
  );
  return response;
};
