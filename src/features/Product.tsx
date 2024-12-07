import { Box, Paper } from "@mui/material";
import { ProductList } from "../Pages/types/ProductDetails";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

interface ProductProps {
  product: ProductList;
  showProductDetails?: boolean;
}

export const Product: React.FC<ProductProps> = ({ product, showProductDetails=false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBookDescription = () => {
    navigate(`/productdetails/${product.id}`);
    // dispatch(set(product)); // Pass the product details to Redux
  };

  const { description, price, title, category, image } = product;

  return (
    <Paper
      className="individualBook"
      elevation={2}
      onClick={handleBookDescription}
      style={{ width: "14vw", border: "0px solid" }}
    >
      <div
        style={{
          height: "60%",
          border: "0px solid",
          background: "#F5F5F5 0% 0% no-repeat padding-box",
        }}
      >
        <img
          src={image}
          style={{ width: "60%", height: "100%", marginLeft: "18%" }}
          alt="book"
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
      <span
          style={{
            font: "normal normal bold 12px/16px Roboto",
            color: "#878787",
          }}
        >
          {title}
        </span>
        <span style={{ font: "normal normal bold 12px/16px Roboto" }}>
          {description}
        </span>
        <br />
       {showProductDetails &&  <Box>
        <button
          style={{
            background: "DarkGreen",
            width: "28px",
            height: "14px",
            fontSize: "xx-small",
            color: "white",
            border: "none",
          }}
        >
          {category}{" "}
        </button>
        <span style={{ fontSize: "x-small" }}>(20)</span>
        <br />
       </Box>}
        <span
          style={{
            font: "normal normal bold 12px/16px Roboto",
            letterSpacing: "0px",
            color: "#0A0102",
            marginTop: "-5px",
          }}
        >
          Rs {price}
        </span>
        <br />
      </div>
    </Paper>
  );
};
