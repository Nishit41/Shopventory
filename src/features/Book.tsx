import { Paper } from "@mui/material";
import { bookDetails } from "../Pages/types/bookDetails";
import { useDispatch } from "react-redux";
import { setBookDetails } from "./BookSlice";
import { useNavigate } from "react-router";

interface Props {
  bookDetails: bookDetails;
  HandleBookDetailsLargeWidth: (
    description: string,
    author: string,
    price: number,
    id: number,
    bookName: string
  ) => void;
  bookpic: string;
}

export const Book = ({
  bookpic,
  bookDetails,
  HandleBookDetailsLargeWidth,
}: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleBookDescription = () => {
    navigate(`/bookdetails/${bookDetails._id}`)
  }

        // HandleBookDetailsLargeWidth(description, author, price, _id, bookName);
        // dispatch(setBookDetails(bookDetails));


  const { description, author, price, _id, bookName } = bookDetails;
  
  return (
    <Paper
      className="individualBook"
      elevation={2}
      onClick={
        handleBookDescription
      }
      style={{ width: "14vw", height: "36vh", border: "0px solid" }}
    >
      <div
        style={{
          height: "60%",
          border: "0px solid",
          background: "#F5F5F5 0% 0% no-repeat padding-box",
        }}
      >
        <img
          src={bookpic}
          style={{ width: "60%", height: "100%", marginLeft: "18%" }}
          alt="book"
        />
      </div>
      <div style={{ marginLeft: "10px" }}>
        <span style={{ font: "normal normal bold 12px/16px Roboto" }}>
          {description}
        </span>
        <br />
        <span
          style={{
            font: "normal normal bold 12px/16px Roboto",
            color: "#878787",
          }}
        >
          {author}
        </span>
        <br />
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
          4.5*
        </button>
        <span style={{ fontSize: "x-small" }}>(20)</span>
        <br />
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
