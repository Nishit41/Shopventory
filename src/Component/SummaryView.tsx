import React, { useEffect, useState } from 'react'
import bookpic from '../Asset/Images/BookImg.png';
// import OrderSucessFull from './OrderSucessFull';
import { get_cart_Item_api } from '../Services/DataServices';
type VerifyOrderProps = {
    checkout: any;
 
};
function SummaryView(props:VerifyOrderProps) {
    const [checkout, setCheckoutHandler] = useState<boolean>(false);
    const [summaryData, setDataAddedForCart] = useState<any>([]);
    function checkoutHandler() {
       props.checkout();
      setCheckoutHandler(true)
    }

    const get_cart_Item = () => {
        get_cart_Item_api().then((resp:any) => setDataAddedForCart(resp.data.result))
    }

    useEffect(() => {
        get_cart_Item()
    }, [])

    return (
        <div>
            
                {summaryData.map((element: any) => <div style={{ width: "28vw", marginLeft: "20px", height: "11vh", 
                  display: "flex", marginBottom: "5px", marginTop: "40px", justifyContent: "space-between" }}>
                    <img src={bookpic} style={{ width: "4.8vw" }}></img>
                    {/* below div is book details upto my cart */}
                    <div className="BookDetailsInMyCart" style={{ marginTop: "-10px",width:"350px", marginLeft: "1vw" }} >
                        <p style={{ font: "normal normal normal 14px/17px Lato", gap: "20px" }}>

                            {element.product_id.bookName}
                            <br />


                            <span style={{ color: "#9D9D9D" }}>   {element.product_id.author} </span>
                            <br />
                            <span>{element.product_id.price}</span>
                        </p>
                    </div>



                </div>)
                }

                <div style={{ textAlign: "end", font: "normal normal normal 12px/16px Roboto", marginBottom: "10px" }}>

                    <button
                        style={{
                            marginTop: "5px", marginRight: "10px",
                            width: "8vw",
                            height: "31px",
                            background: "#3699ba",
                            color: "white",
                            border: "none",
                            borderRadius: "3px"
                        }}
                        onClick={()=>checkoutHandler()}

                    >CHECKOUT
                    </button>
                </div>
                 {/* {checkout?<OrderSucessFull/>:" "} */}

        
        </div>
    )
}

export default SummaryView