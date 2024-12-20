import axios from "axios";
import { headerConfig } from "../utils/constant";
import { CartPayload } from "../../Component/Counter";

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

export const addItemToCart = async (
  userId: number,
  products: CartPayload[]
) => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId,
        date: Date.now(),
        products,
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

export const getUserCart = async (userId: string) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/carts/user/${userId}`
    );
    return await response.json();
  } catch (error) {
    console.error("error fetching Cart", error);
  }
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
