import React from 'react'
import successfullyPlacedImg from '../Asset/Images/orderplaced.jpeg';

function OrderSucessFull() {
    return (
        <>
           <div className="sucessfullOrder" style={{ textAlign: "center", alignContent: "center", alignItems: "center" }}>
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
            


            </div> 
        </>
    )
}

export default OrderSucessFull