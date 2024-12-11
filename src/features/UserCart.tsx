import { Counter } from "../Component/Counter";
import { useGetCartItems } from "../hooks/useGetCartItems";

export const UserCart = () => {
  const {cartItems, loading, error} =  useGetCartItems("1");
  console.log("cartItems",cartItems);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "92%",
        margin: "auto",
      }}
    >
      <div>MyCart(1)</div>
      <span style={{ width: "10vw" }}></span>
      <span
        style={{
          height: "28px",
          width: "14vw",
          border: "1px solid #DBDBDB",
        }}
      ></span>
      {cartItems?.map((element: any) => (
        // <>
        //   <div
        //     style={{
        //       width: "18vw",
        //       marginLeft: "18px",
        //       height: "11vh",
        //       display: "flex",
        //       marginBottom: "5px",
        //       marginTop: "40px",
        //       gap: "40px",
        //     }}
        //   >
        //     <img src="" style={{ width: "4.8vw" }}></img>
        //     {/* below div is book details upto my cart */}
        //     <div
        //       className="BookDetailsInMyCart"
        //       style={{ marginTop: "-10px", marginLeft: "0px" }}
        //     >
        //       <p style={{ font: "normal normal normal 15px/17px Lato" }}>
        //         {/* Don't make me think */}
        //         {element.product_id.bookName}
        //         <br />

        //         <span style={{ color: "#9D9D9D" }}>
        //           {element.product_id.description}{" "}
        //         </span>
        //         <br />
        //         <button
        //           style={{
        //             background: "DarkGreen",
        //             width: "50px",
        //             height: "20px",
        //             fontSize: "xx-small",
        //             color: "white",
        //             border: "none",
        //           }}
        //         >
        //           4.5*
        //         </button>
        //         <br />
        //         <span>Rs {element.product_id.price}</span>
        //       </p>
        //     </div>
        //     {/* upto this above div book details is my cart  */}
        //   </div>
        //   <Counter />
        //   <button
        //     style={{
        //       height: "29px",
        //       width: "8vw",
        //       marginLeft: "80%",
        //       background: "#3371B5 0% 0% no-repeat padding-box",
        //       borderRadius: "2px",
        //       border: "none",
        //       color: "#FFFFFF",
        //       marginBottom: "50px",
        //     }}
        //     // onClick={() => displayCustomerDetails()}
        //   >
        //     PLACE ORDER
        //   </button>
        // </>
        <></>
      ))}
    </div>
  );
};
