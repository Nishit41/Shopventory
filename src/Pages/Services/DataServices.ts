import axios from "axios";
import { headerConfig } from "../utils/constant";

export const getBookDescription = async () => {
  try {
    const response = await fetch(
      "https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",
      headerConfig
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching book description:", error);
    throw error;
  }
};

export const add_cart_item_api = (id: any) => {
  console.log("id for post", id);
  console.log("localstorage", headerConfig);
  let response = axios.post(
    `https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${id}`,
    id,
    headerConfig
  );
  return response;
};

export const add__item_to_wishListApi = (id: any) => {
  console.log("id for post to wishlist", id);
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
