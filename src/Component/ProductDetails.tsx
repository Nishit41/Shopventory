import { Box } from "@mui/material";
import {
  addItemToCart,
} from "../Services/DataServices";
import { Counter } from "./Counter";
import useProductDetail from "../hooks/useProuductDetail";
import { useParams } from "react-router";
import { ProductList } from "../Pages/types/ProductDetails";
import { useState } from "react";
import { Product } from "../common/types/CartDetails";

interface Props{
  product?: Product;
}

export const ProductDetails = ({product}:any) => {
  console.log("Product",product);
  const {id} = useParams()
  const [counterDisplay, setCounterDisplay] = useState<boolean>(false);

  //  const {product, loading} = useProductDetail(id as string)
  // if (loading || !product ) {
  //   return <h1>Loading...</h1>;
  // }
   
  const addToCart = () => {
    
  }


  return (
    <Box sx={{
      marginTop:"100px"
    }}>
      {/* <NavLink/> */}
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
            {counterDisplay ? (
              <Counter product= {product}/>
            ):(
              <button
                style={{
                  width: "9vw",
                  height: "4vh",
                  background: "DarkRed",
                  color: "white",
                  border: "none",
                }}
                onClick={()=>{setCounterDisplay(true)}}
              >
                ADD TO BAG
              </button>
            )   
            }
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


