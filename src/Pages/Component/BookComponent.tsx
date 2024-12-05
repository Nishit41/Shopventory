// import { Paper, TextField } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import { add__item_to_wishListApi, add_cart_item_api, getBookDescription, get_cart_Item_api } from '../Services/DataServices';
// import bookpic from '../Asset/Images/BookImg.png';
// import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
// import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
// function BookComponent() {
//   const [BookArr1, setBookDescription] = useState<any>([]);
//   const [bookLargeImg, setbookLargeImg] = useState<boolean>(true);
//   const [bookFullScreen, setBookFullScreen] = useState<boolean>(false);
//   const [bookDescription, setBookDescriptionFullScreen] = useState<any>();
//   const [bookAuthor, setBookAuthor] = useState<string>();
//   const [bookPrice, setBookPrice] = useState<number>();
//   const [counterDisplay, setCounter] = useState<boolean>(true);
//   const [id, setid] = useState<number>();
//   const [bookName, setBookName] = useState<string>(" ");
//   const [dataInCart, setDataAddedInCart] = useState<any>([]);


//   const getBookDetailsApi = () => {
//     getBookDescription().then(resp => setBookDescription(resp.data.result)).catch(err => console.log(err));
//   }
//   useEffect(() => {
//     getBookDetailsApi()
//   }, [])



//   const HandleBookDetailsLargeWidth = (description: string, author: string, price: number, id: number, bookName: string) => {
//     setbookLargeImg(false);
//     setBookFullScreen(true);
//     setBookAuthor(author);
//     setBookDescriptionFullScreen(description);
//     setBookPrice(price);
//     setid(id);
//     setBookName(bookName);
//     get_cart_Item();
//   }

//   function counter() {
//     // console.log("im inside the counter fn");
//     setCounter(false);
//     add_cart_item_api(id).then(res => console.log("response from API ADD CART", res)).catch(err => console.log(err));
//   }

//   function addToWishList() {
//     add__item_to_wishListApi(id).then((resp) => console.log(resp, "response from add to wishlist")).catch((err: any) => console.log(err))
//   }
//   const get_cart_Item = () => {
//     get_cart_Item_api().then(resp => setDataAddedInCart(resp.data.result))
//   }

    

//    useEffect(()=>{
//      dataFound();
//    },[bookFullScreen])

    
  
//    const dataFound = () =>{
//     console.log("hello")

//   //  dataInCart.filter((ele: any) => {
//   //   if ((ele.product_id.bookName) == bookName) {
//   //       console.log("found")
//   //    }
//   //    else{
//   //       console.log("not found")
//   //    }
//   //  })
//   }
//   // console.log(data, "data from cart");
  
 







//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "space-between", width: "60vw", marginLeft: "18vw", marginTop: "5vh", marginRight: "20vw" }}>
//         {/*This below lines are for sorting and Books quantity  */}
//         {bookFullScreen ?
//           <div className="child" style={{ font: "normal normal normal 14px/16px Roboto" }}>
//             Home/Book(01)
//           </div> : <>
//             <div className="child" style={{ font: "normal normal normal 24px/16px Roboto" }}>
//               Books (128 items)
//             </div>
//             <span style={{ height: "28px", width: "14vw", border: "1px solid #DBDBDB", display: "flex", justifyContent: "space-around" }}>
//               <span>Sort by Relevance</span>
//               <span><ArrowDropDownSharpIcon></ArrowDropDownSharpIcon></span>
//             </span>
//           </>
//         }
//       </div>
//       <br />
//       {bookLargeImg ? <div style={{
//         width: "60vw", marginLeft: "18vw", marginRight: "20vw", display: "flex", gap: "14px", flexWrap: "wrap",
//         justifyContent: "space-around",

//       }}>
//         {
//           BookArr1.map((book: any) =>
//             <Paper className="individualBook" elevation={2}
//               onClick={() => HandleBookDetailsLargeWidth(book.description, book.author, book.price, book._id, book.bookName)}
//               style={{ width: "14vw", height: "36vh", border: "0px solid" }}>
//               <div style={{ height: "60%", border: "0px solid", background: "#F5F5F5 0% 0% no-repeat padding-box" }}>
//                 <img src={bookpic} style={{ width: "60%", height: "100%", marginLeft: "18%" }} />
//               </div>
//               <div style={{ marginLeft: "10px" }}>
//                 <span style={{ font: "normal normal bold 12px/16px Roboto" }}>
//                   {book.description}
//                 </span><br />
//                 <span style={{ font: "normal normal bold 12px/16px Roboto", color: "#878787" }}>{book.author}</span><br />
//                 <button style={{ background: "DarkGreen", width: "28px", height: "14px", fontSize: "xx-small", color: "white", border: "none" }}>4.5*</button><span style={{ fontSize: "x-small" }}>(20)</span><br />
//                 <span style={{
//                   font: "normal normal bold 12px/16px Roboto",
//                   letterSpacing: "0px",
//                   color: "#0A0102", marginTop: "-5px"
//                 }}>Rs{' '}{book.price}</span><br />
//               </div>
//             </Paper>)
//         }
//       </div> : " "}
//       {bookFullScreen ?
//         <div style={{
//           width: "50vw", marginLeft: "20vw", marginRight: "20vw", display: "flex", flexDirection: "row",
//           // border:"5.5px solid blue",
//           gap: "50px"

//         }}>
//           <div style={{
//             // width: "50vw",
//             //  border:"1.5px solid red",
//             height: "60vh"
//           }}>
//             <img src={bookpic} alt="Some Issue Related To Image"
//               style={{ border: "1px solid #DBDBDB", width: "350px", }
//               }
//             />
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               {counterDisplay ? <button style={{ width: "9vw", height: "4vh", background: "DarkRed", color: "white", border: "none" }}
//                 onClick={counter}
//               >ADD TO BAG</button> :
//                 // below considered as parent button div for counter 
//                 <button style={{
//                   width: "9vw", height: "4vh", background: "none", border: "none", display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//                 ><button
//                   style={{
//                     width: "1.8vw",
//                     height: "3.2vh",
//                     color: "Black",
//                     border: "1px solid #DBDBDB",
//                     borderRadius: "55px",
//                   }}
//                 >
//                     -
//                   </button>
//                   <button
//                     style={{
//                       width: "2.8vw",
//                       height: "3.2vh",
//                       color: "Black",
//                       border: "1px solid #DBDBDB",

//                     }}
//                   >
//                     1
//                   </button>
//                   <button
//                     style={{
//                       width: "1.8vw",
//                       height: "3.2vh",
//                       // background:"DarkOrange",
//                       color: "Black",
//                       border: "1px solid #DBDBDB",
//                       borderRadius: "55px"
//                     }}
//                   >
//                     +
//                   </button>
//                 </button>}
//               <button style={{ width: "9vw", height: "4vh", background: "#231c1c", color: "white", border: "none" }}
//                 onClick={addToWishList}

//               >WISHLIST</button>
//             </div>



//           </div>
//           <div className='box2' style={{ font: "normal normal bold 12px/16px Roboto", color: "#878787", marginTop: "-10px" }}>
//             <h1>{bookDescription}</h1>
//             <h1>{bookAuthor}</h1>
//             <button style={{ background: "DarkGreen", width: "50px", height: "20px", fontSize: "xx-small", color: "white", border: "none" }}>4.5*</button><span style={{ fontSize: "x-small" }}>(20)</span><br />
//             <h1>Rs{' '}{bookPrice}</h1>
//             <hr />
//             <div>
//               <p>
//                 <h2 style={{ color: "black" }}>Book Details</h2>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                 Corporis quisquam obcaecati qui cupiditate nemo dolorum quia laboriosam hic,
//                 adipisci aliquid, perferendis repudiandae fugit distinctio dolor impedit.
//                 Doloribus culpa, vel ab dolor omnis ullam reprehenderit? Minus alias, iure ut explicabo,
//                 aliquam impedit harum inventore odit, repudiandae cumque sed earum nulla autem.
//               </p>
//             </div>
//             <hr />
//             <h2 style={{ color: "black" }}>Customer Feedback</h2>
//             <h3 >overall Ratting</h3>
//             {/* {StarOutlineOutlinedIcon}{StarOutlineOutlinedIcon}{StarOutlineOutlinedIcon}{StarOutlineOutlinedIcon}{StarOutlineOutlinedIcon} */}
//             <StarOutlineOutlinedIcon /><StarOutlineOutlinedIcon /><StarOutlineOutlinedIcon /><StarOutlineOutlinedIcon /><StarOutlineOutlinedIcon />
//           </div>
//         </div> : " "}
//     </>
//   )
// }

// export default BookComponent


const BookDetails = () =>{
 return <>
  Books
  </>
}

export default BookDetails