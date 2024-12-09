import { TextField } from "@mui/material";
import { display } from "@mui/system";
import React, { useEffect, useState } from "react";
import bookpic from "../Asset/Images/BookImg.png";
import {
  cartQuantityApi,
  customerDetailsApi,
  get_cart_Item_api,
  getUserCart,
} from "../Services/DataServices";
import successfullyPlacedImg from "../Asset/Images/orderplaced.jpeg";
import CustomerDetails from "./CustomerDetails";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import OrderSucessFull from "./OrderSucessFull";
import SummaryView from "./SummaryView";

const UserCart=() =>{
    const cartItems =  getUserCart("18");
  const [customerDetails, setDisplayCustomerDetails] = useState<boolean>(true);
  const [dataForCart, setDataAddedForCart] = useState<any>([]);
  const [checkout, setCheckoutHandler] = useState<boolean>(true);
  let [noOfCards, setCardQuantity] = useState<{ quantity: number }>({
    quantity: 1,
  });

  function displayCustomerDetails() {
    setDisplayCustomerDetails(false);
  }

  const get_cart_Item = () => {
    get_cart_Item_api().then((resp: any) =>
      setDataAddedForCart(resp.data.result)
    );
  };

  useEffect(() => {
    get_cart_Item();
  }, [noOfCards.quantity]);
  const checkoutHandler = () => {
    setCheckoutHandler(false);
  };
  console.log(checkout, "checkout from my cart");

  function incrementCardQuantity(id: any) {
    // let temp = noOfCards.quantity + 1;
    setCardQuantity((abc: any) => abc + 1);
    cartQuantityApi(noOfCards, id)
      .then(() => get_cart_Item())
      .catch((err: any) => {
        console.log(err);
      });
  }

  function decrementCardQuantiy(id: any) {
    cartQuantityApi(noOfCards, id)
      .then(() => get_cart_Item())
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <div>
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60vw",
            marginLeft: "20vw",
            marginTop: "5vh",
            marginRight: "20vw",
          }}
        >
          <div
            className="child"
            style={{ font: "normal normal normal 14px/16px Roboto" }}
          >
            Home / My cart
          </div>
        </div>
        <br />
        <div
          className="ParentDiv"
          style={{
            width: "50vw",
            marginLeft: "20vw",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "auto",
              border: "1px solid #DCDCDC",
              boxSizing: "border-box",
            }}
          >
            <br />

            <Cart/>
          
            {/* Mini header */}
          

            {customerDetails ? (
              <button
                style={{
                  height: "29px",
                  width: "8vw",
                  marginLeft: "80%",
                  background: "#3371B5 0% 0% no-repeat padding-box",
                  borderRadius: "2px",
                  border: "none",
                  color: "#FFFFFF",
                  marginBottom: "50px",
                }}
                onClick={() => displayCustomerDetails()}
              >
                PLACE ORDER
              </button>
            ) : (
              " "
            )}
          </div>

          {customerDetails ? (
            <>
              <div
                style={{
                  width: "100%",
                  height: "8vh",
                  border: "1px solid #DBDBDB",
                }}
              >
                <div
                  className="AddressDetails"
                  style={{ marginLeft: "24px", marginTop: "10px" }}
                >
                  Address Details
                </div>
              </div>
            </>
          ) : (
            <CustomerDetails />
          )}
        </div>
      </>

      {customerDetails ? (
        <div
          style={{
            width: "50vw",
            height: "8vh",
            marginLeft: "20vw",
            marginTop: "10px",
            border: "1px solid #DBDBDB",
          }}
        >
          <div
            className="OrderSummary"
            style={{ marginLeft: "24px", marginTop: "10px" }}
          >
            Order Summery
          </div>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}

export default UserCart;
