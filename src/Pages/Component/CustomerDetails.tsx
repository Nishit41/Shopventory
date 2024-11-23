import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { customerDetailsApi } from '../Services/DataServices';
import SummaryView from './SummaryView';

function CustomerDetails() {
    const [summaryDetailsView, setSummaryDetailsView] = useState<boolean>(true);
    const [addressObj, setTakeAddressObj] = useState<{ "addressType": " ", "fullAddress": " ", "city": " ", "state": " " }>({
        "addressType": " ",
        "fullAddress": " ",
        "city": " ",
        "state": " "
    });
    function takeAddress(event: { target: { value: any; }; }) {
        setTakeAddressObj(prevState => ({
            ...prevState,
            fullAddress: event.target.value
        }))
    }
    function summaryHandler() {
        setSummaryDetailsView(false);
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
<<<<<<< HEAD
        customerDetailsApi(addressObj).catch((err:any) => console.log("error", err));
=======
        customerDetailsApi(addressObj).then(response => console.log(response, "from edit api")).catch(err => console.log("error", err));
>>>>>>> 00c33b9e2a91c437811a09d54c293464bb4b0ca6
    }
    const handleClickRadioButton = (value: any) => {
        setTakeAddressObj(prevState => ({
            ...prevState,
            addressType: value,
        }))
    }
    return (

        <div>
        <div className="ParentDiv" style={{
            width: "50vw",
            display: "flex", flexDirection: "column",
            boxSizing: "border-box",
            border: "1px solid #DCDCDC",
            height: "44vh",


        }}>
            <br/>
            <div className='customerDetailsSubHeader'
                style={{ display: "flex", justifyContent: "space-between",width:"95%"}}
            >
                <div className="customerDetails"
                    style={{ marginLeft: "24px", marginTop: "10px" }}
                >
                    CustomerDetails
                </div>
               
                <span style ={{ height: "28px",width: "8vw",textAlign:"center",paddingTop:"2.8px",boxSizing:"border-box", border:"1px solid red", color:"red",fontSize:"small",marginTop:"5px" }}>
                 AddNewAddress
                 </span>
                {/* <TextField
                    style={{ marginTop: "5px", marginRight: "20px", width: "8vw" }}
                    inputProps={{
                        style: {
                            height: "2.0px",
                        },
                    }} /> */}
            </div>
            <br/>
            <div className='marginLeft' style={{ marginLeft: "2.6vw", width: "57.5%" }}>
                <div className='customerUserInput' style={{ display: "flex", flexDirection: "column" }}>
                    <div className='text-Field-names' style={{
                        display: "flex",
                        font: "normal normal normal 12px/16px Roboto",
                        gap: "9px",
                    }}>
                        <div >
                            Full Name
                            <br />
                            <TextField style={{ width: "14vw" }}

                                inputProps={{
                                    style: {
                                        height: "2px",
                                    },
                                }}
                            />
                        </div>
                        <div>
                            Mobile Number
                            <br />
                            <TextField style={{ width: "14vw" }}

                                inputProps={{
                                    style: {
                                        height: "2px",
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    Address
                    <br />
                    <TextField style={{ width: "100%" }}
                        onChange={takeAddress}
                        inputProps={{
                            style: {
                                height: "14px",
                            },
                        }}
                    />
                </div>

                <div
                    className='townAddress'
                    style={{ display: "flex", gap: "6px", font: "normal normal normal 12px/16px Roboto" }}
                >
                    <div>
                        city/town

                        <br />
                        <TextField style={{ width: "14vw" }}
                            onChange={takeStreetDetails}
                            inputProps={{
                                style: {
                                    height: "2px",
                                },
                            }}
                        />
                    </div>
                    <div />
                    <div>
                        <div style={{ font: "normal normal normal 12px/16px Roboto" }}>
                            State
                            <br />
                            <TextField style={{ width: "14vw", justifyContent: "space-between" }}
                                onChange={takeState}
                                inputProps={{
                                    style: {
                                        height: "2px",
                                    },
                                }}

                            />
                        </div>
                    </div>
                </div>

                <div className='Type' style={{ font: "normal normal normal 12px/16px Roboto" }}>
                    Type
                    <div className='Radio-Input'
                        style={{ display: "flex", gap: "6px", font: "normal normal normal 12px/16px Roboto" }}
                    >
                        <input type="radio" id="home" onClick={() => handleClickRadioButton("Home")} />
                        <label >HOME</label><br />
                        <input type="radio" value="css" onClick={() => handleClickRadioButton("Work")} />
                        <label>WORK</label><br />
                        <input type="radio" value="JavaScript" onClick={() => handleClickRadioButton("Other")} />
                        <label>Other</label>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "end", font: "normal normal normal 12px/16px Roboto" }}>
                {summaryDetailsView ? <button
                    style={{
                        marginTop: "5px", marginRight: "44px", width: "8vw", height: "31px", background: "#3699ba", color: "white",
                        border: "none", borderRadius: "3px"
                    }}
                    onClick={() => { submitCustomerDetails(); summaryHandler() }}

                >Continue
                </button> : " "}
            </div>
            </div>


          
            <div className="ParentDiv-order-summary" style={{
                width: "50vw", 
               boxSizing: "border-box",
                border: "1px solid #DBDBDB",
                marginTop: "15px",
                minHeight:"8vh"
            }}>

            <div style={{ width: "100%", height: "auto" }}>
                <div className='OrderSummary' style={{ marginLeft: "24px", marginTop: "10px" }}>
                    Order Summery
                </div>

                {
                    summaryDetailsView ? " " : <SummaryView checkout={undefined} />

                }
            </div>
            </div>
        </div>
    )
}

export default CustomerDetails