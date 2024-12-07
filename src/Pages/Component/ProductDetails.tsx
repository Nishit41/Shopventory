import { Box } from "@mui/material";
import {
  add__item_to_wishListApi,
  addItemToCart,
} from "../Services/DataServices";
import { Counter } from "./Counter";
import useProductDetail from "../../hooks/useProuductDetail";
import { useParams } from "react-router";
import { Product } from "../../features/Product";
import { ProductList } from "../types/ProductDetails";
export const ProductDetails = () => {
  const {id} = useParams()
  const {product, loading} = useProductDetail(id as string)
  if (loading || !product ) {
    return <h1>Loading...</h1>;
  }
   
  const addToCart = () => {
    
  }

  console.log("product",product);
  // const { selectedProduct } = useSelector((store: RootState) => store?.book);
  // const [counterDisplay, setCounter] = useState<boolean>(true);
  // function counter() {
  //   // console.log("im inside the counter fn");
  //   setCounter(false);
  //   add_cart_item_api(id)
  //     .then((res) => console.log("response from API ADD CART", res))
  //     .catch((err) => console.log(err));
  // }

  function addToWishList(product: ProductList) {
    const {id,quantity} = product
    const productAdd = [];
    productAdd.push({
      productId:id,
      quantity: quantity 
    }) 
    addItemToCart()
      .then((resp) => console.log(resp, "response from add to wishlist"))
      .catch((err: any) => console.log(err));
  }
  // const get_cart_Item = () => {
    // get_cart_Item_api().then((resp) => setDataAddedInCart(resp.data.result));
  // }

  return (
    <Box sx={{
      marginTop:"100px"
    }}>
      {/* <Navbar/> */}
    {/* Navbar will be implemented here */}
      <Box
        sx={{
          width: "50%",
          margin:"auto",
          display: "flex",
          flexDirection: "row",
          gap: "50px",
        }}
      >
        <div
          style={{
            height: "60vh",
          }}
        >
          <img
            src={product?.image}
            alt="Some Issue Related"
            style={{ border: "1px solid #DBDBDB", width: "350px" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {true ? (
              <button
                style={{
                  width: "9vw",
                  height: "4vh",
                  background: "DarkRed",
                  color: "white",
                  border: "none",
                }}
                onClick={()=>{}}
              >
                ADD TO BAG
              </button>
            ) : (
              <Counter/>
            )}
            <button
              style={{
                width: "9vw",
                height: "4vh",
                background: "#231c1c",
                color: "white",
                border: "none",
              }}
              onClick={addToWishList}
            >
              WISHLIST
            </button>
          </div>
        </div>

        <div
          style={{
            font: "normal normal bold 12px/16px Roboto",
            color: "#878787",
            marginTop: "-10px",
          }}
        >
          <h2>{product?.description}</h2>
          <h2>{product?.title}</h2>
          <button
            style={{
              background: "DarkGreen",
              width: "50px",
              height: "20px",
              fontSize: "xx-small",
              color: "white",
              border: "none",
            }}
          >
            4.5*
          </button>
          <span style={{ fontSize: "x-small" }}>(20)</span>
          <br />
           <h1>ActualPrice - Rs {product?.price}</h1> 
          <hr />
        </div>
      </Box>
    </Box>
  );
};


