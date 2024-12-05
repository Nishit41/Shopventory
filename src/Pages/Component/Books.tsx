import React, { useEffect, useState } from "react";
import {
  add__item_to_wishListApi,
  add_cart_item_api,
  getBookDescription,
  get_cart_Item_api,
} from "../Services/DataServices";
import bookpic from "../Asset/Images/BookImg.png";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import { bookDetails } from "../types/bookDetails";
import { EMPTY_STRING } from "../utils/constant";
import { Book } from "../../features/Book";
import useBookDetails from "../../hooks/useBookDetails";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";

const Books = () => {
  const { bookList, error, loading } = useBookDetails();
  //TODO: error component , loading -simmerUI
  const navigate = useNavigate();

  const [bookLargeImg, setbookLargeImg] = useState<boolean>(true);
  const [bookFullScreen, setBookFullScreen] = useState<boolean>(false);
  const [bookDescription, setBookDescriptionFullScreen] = useState<any>();
  const [bookAuthor, setBookAuthor] = useState<string>();
  const [bookPrice, setBookPrice] = useState<number>();
  const [counterDisplay, setCounter] = useState<boolean>(true);
  const [id, setid] = useState<number>();

  const HandleBookDetailsLargeWidth = (
    description: string,
    author: string,
    price: number,
    id: number,
    bookName: string
  ) => {
    setbookLargeImg(false);
    setBookFullScreen(true);
    setBookAuthor(author);
    setBookDescriptionFullScreen(description);
    setBookPrice(price);
    setid(id);
    // setBookName(bookName);
    get_cart_Item();
  };

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
        {bookList?.map((book: bookDetails) => (
          <Book
            key={book?._id}
            bookDetails={book}
            HandleBookDetailsLargeWidth={HandleBookDetailsLargeWidth}
            bookpic={bookpic}
          />
        ))}
      </Box>
  );
};

export default Books;
