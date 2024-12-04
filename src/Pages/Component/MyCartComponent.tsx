import { TextField } from '@mui/material'
import { display } from '@mui/system';
import React, { useEffect, useState } from 'react';
import bookpic from '../Asset/Images/BookImg.png';
import { cartQuantityApi, customerDetailsApi, get_cart_Item_api } from '../Services/DataServices';
import successfullyPlacedImg from '../Asset/Images/orderplaced.jpeg';
import CustomerDetails from './CustomerDetails';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import OrderSucessFull from './OrderSucessFull';
import SummaryView from './SummaryView';

function MyCartComponent() {
    const [customerDetails, setDisplayCustomerDetails] = useState<boolean>(true);
    const [dataForCart, setDataAddedForCart] = useState<any>([]);
    const [summaryDetailsView, setSummaryDetailsView] = useState<boolean>(true);
    const [checkout, setCheckoutHandler] = useState<boolean>(true);
    const [display, setDisplayNone] = useState<boolean>(false);
    let [noOfCards, setCardQuantity] = useState<{ quantity: number }>({
        quantity: 1,
    });
    const [addressObj, setTakeAddressObj] = useState<{ "addressType": " ", "fullAddress": " ", "city": " ", "state": " " }>({
        "addressType": " ",
        "fullAddress": " ",
        "city": " ",
        "state": " "
    });



    function displayCustomerDetails() {
        setDisplayCustomerDetails(false);
    }


    const get_cart_Item = () => {
        get_cart_Item_api().then((resp:any) => setDataAddedForCart(resp.data.result))
    }

    useEffect(() => {
        get_cart_Item()
    }, [noOfCards.quantity])
    function summaryHandler() {
        setSummaryDetailsView(false);
    }
    const checkoutHandler = () =>{
        setCheckoutHandler(false)
    }
    console.log(checkout,"checkout from my cart")

    function incrementCardQuantity(id: any) {
        // let temp = noOfCards.quantity + 1;
        setCardQuantity((abc:any)=> abc+1)
        cartQuantityApi(noOfCards, id).then(() => get_cart_Item()).catch((err:any) => {
            console.log(err)
        })
    }

    function decrementCardQuantiy(id: any) {
        // setCardQuantity((quant:any)=> quant-1)
        // if (decre <= 1) {
        //     decre = 1;
        // }
        // console.log("decre",decre);
        // setCardQuantity({
        //     quantity:decre,
        // })
        // setCardQuantity((a:any) => a-1);
        cartQuantityApi(noOfCards, id).then(() => get_cart_Item()).catch((err:any) => {
            console.log(err)
        })
    }



    const handleClickRadioButton = (value: any) => {
        setTakeAddressObj(prevState => ({
            ...prevState,
            addressType: value,
        }))
    }



    function takeAddress(event: { target: { value: any; }; }) {
        setTakeAddressObj(prevState => ({
            ...prevState,
            fullAddress: event.target.value
        }))
    }
    function takeState(event: { target: { value: any; }; }) {
        setTakeAddressObj(prevState => ({
            ...prevState,
            state: event.target.value
        }))
    }
    function takeStreetDetails(event: { target: { value: any; }; }) {
        setTakeAddressObj(prevState => ({
            ...prevState,
            city: event.target.value,
        }))
    }



    function submitCustomerDetails() {
        customerDetailsApi(addressObj).catch((err:any) => console.log("error", err));
    }


    console.log("data for cart", dataForCart);

    return (
        <div>
            {/* {checkout ? <div className="sucessfullOrder" style={{ textAlign: "center", alignContent: "center", alignItems: "center" }}>
                <img src={successfullyPlacedImg} style={{ width: "40vw", height: "40vh", marginTop: "10px" }} />

                <p>
                    hurray!!!your Order is confirmed<br />
                    the order id is #123456 save the order id for<br />
                    furthur communication
                </p>
                <div style={{ marginLeft: "20vw", border: "1.0px solid", width: "60vw", font: "normal normal medium 14px/15px Lato" }}>
                    <tr style={{ borderBottom: "0.5px solid", display: "flex", justifyContent: "space-around", height: "5vh", font: "normal normal medium 14px/15px Lato" }}>
                        <th style={{}}>Email us</th>
                        <th style={{}}>Contact us</th>
                        <th style={{}}>Address</th>
                    </tr>




                    <tr style={{ font: "normal normal medium 14px/15px Lato" }}>
                        <td style={{ borderRight: "1.5px solid", width: "33.5%", font: "normal normal medium 14px/15px Lato" }}>Admin@bookstore.com</td>
                        <td style={{ borderRight: "1.5px solid", width: "33.5%", font: "normal normal medium 14px/15px Lato" }}>+91 8163475881</td>
                        <td style={{ width: "33.5%", textAlign: "center", font: "normal normal medium 14px/15px Lato" }}>42,14th Main,15th cross sector4,opp to bda complex near kumarakom restaruant,HSR layout,Banglore-560032</td>
                    </tr>

                </div>
                <button style={{
                    margin: "auto", background: "#3371B5", width: "150px", font: "normal normal medium 14px/17px Lato",
                    textAlign: "center",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    height: "35px",
                    borderRadius: "4.5px",
                    border: "none",
                    marginTop: "10px",

                }}>
                    Continue
                </button>


            </div> */}
             
                

                <>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", width: "60vw", marginLeft: "20vw", marginTop: "5vh", marginRight: "20vw" }}>
                    <div className="child" style={{ font: "normal normal normal 14px/16px Roboto" }}>
                      Home / My cart
                    </div>
                   </div>
                    <br/>

                    {/* <div style={{ height: "5vh" }} >
                    </div> */}
                    <div className="ParentDiv" style={{
                        width: "50vw", marginLeft: "20vw"
                        , display: "flex", flexDirection: "column", gap: "14px",
                        boxSizing: "border-box",

                    }}>
                        <div style={{
                            width: "100%", height: "auto", border: "1px solid #DCDCDC",
                            boxSizing: "border-box",

                        }}>
                            <br />
                            {/* mini header */}
                            <div style={{ display: "flex", justifyContent: "space-between", width: "92%", margin: "auto", }}>
                                <div>
                                    MyCart(1)
                                </div>
                                <span style={{ width: "10vw" }}></span>
                                <span style={{
                                    height: "28px",
                                    width: "14vw",
                                    border: "1px solid #DBDBDB",
                                }}
                                >

                                </span>
                            </div>
                            {/* Mini header */}
                            {dataForCart.map((element: any) =>
                                <>
                                    <div style={{ width: "18vw", marginLeft: "18px", height: "11vh", display: "flex", marginBottom: "5px", marginTop: "40px", gap: "40px" }}>
                                        <img src={bookpic} style={{ width: "4.8vw" }}></img>
                                        {/* below div is book details upto my cart */}
                                        <div className="BookDetailsInMyCart" style={{ marginTop: "-10px", marginLeft: "0px" }} >
                                            <p style={{ font: "normal normal normal 15px/17px Lato" }}>
                                                {/* Don't make me think */}
                                                {element.product_id.bookName}
                                                <br />


                                                <span style={{ color: "#9D9D9D" }}>{element.product_id.description} </span>
                                                <br />
                                                <button style={{ background: "DarkGreen", width: "50px", height: "20px", fontSize: "xx-small", color: "white", border: "none" }}>4.5*</button>
                                                <br />
                                                <span>Rs{' '}{element.product_id.price}</span>
                                            </p>
                                        </div>
                                        {/* upto this above div book details is my cart  */}
                                    </div>



                                    <div style={{ marginLeft: "7.8vw", height: "15px", marginBottom: "40px", display: "flex", textAlign: "center", gap: "20px" }}>
                                        {/* this div is for counter */}
                                        <div style={{
                                            width: "7.5vw", height: "", background: "none", border: "1px solid red", display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",

                                        }}
                                        >
                                            <span
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                    color: "Black",
                                                    border: "1px solid #DBDBDB",
                                                    borderRadius: "400px",
                                                }}
                                                onClick={() => { decrementCardQuantiy(element._id) }}
                                            >
                                                -
                                            </span>
                                            <button
                                                style={{
                                                    width: "2.8vw",
                                                    height: "3.2vh",
                                                    color: "Black",
                                                    border: "1px solid #DBDBDB",

                                                }}
                                            >
                                                {element.quantityToBuy}
                                            </button>
                                            <div
                                                style={{
                                                    width: "18px",
                                                    height: "18px",
                                                    color: "Black",
                                                    border: "1px solid #DBDBDB",
                                                    borderRadius: "400px",
                                                    textAlign: "center",
                                                    alignItems: "center",
                                                    boxSizing: "border-box",
                                                    // padding: "1.0px",
                                                }}
                                                onClick={() => { incrementCardQuantity(element._id) }}
                                            >
                                                +

                                            </div>
                                        </div>
                                        <div >
                                            Remove
                                        </div>
                                    </div>
                                </>
                            )}


                            {customerDetails ? <button style={{
                                height: "29px", width: "8vw", marginLeft: "80%",
                                background: "#3371B5 0% 0% no-repeat padding-box",
                                borderRadius: "2px",
                                border: "none",
                                color: "#FFFFFF",
                                marginBottom: "50px"
                            }}
                                onClick={() => displayCustomerDetails()}
                            >
                                PLACE{' '}ORDER
                            </button> : " "
                            }
                        </div>

                        {
                            customerDetails ? <><div style={{ width: "100%", height: "8vh", border: "1px solid #DBDBDB" }}>
                                <div className='AddressDetails' style={{ marginLeft: "24px", marginTop: "10px" }}>
                                    Address Details
                                </div>
                            </div>

                            </>
                                :
                                <CustomerDetails />
                        }
                    </div>
                </>
            
            {customerDetails ? <div style={{ width: "50vw", height: "8vh", marginLeft: "20vw", marginTop: "10px", border: "1px solid #DBDBDB" }}>
                <div className='OrderSummary' style={{ marginLeft: "24px", marginTop: "10px" }}>
                    Order Summery
                </div>
            </div> : " "}
            


        </div>

    )
}

export default MyCartComponent