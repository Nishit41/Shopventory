import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import pic from '../Pages/Asset/Images/imgsignin.png'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { signInApi, signUpApi } from './Services/userservices';
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const fullNameRegex =/^[a-zA-Z]{2,}$/;
const MobileNumberRegex = /^([+]\d{2})?\d{10}$/;

function SignIn() {
  const navigate = useNavigate();
  const [credential, setCredentialSignInObj] = useState<{ "email":" ", "password":" " ,}>({
    "email": " ",
    "password": " ",
   });
  const [regexObj, setRegexObj] = useState<any>({
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
  })
  const [SignUp, setSignUp] = useState<boolean>(false);
  function setSignInPage() {
    setSignUp(false)
  }
  function setSignUpPage() {
    setSignUp(true);
  }


  // signInOnchange methods


  const signInTakePassword = (event: { target: { value: any; }; }) => {
    setCredentialSignInObj(prevState => ({
      ...prevState,
      password: event.target.value
    }))
  }

  const signInTakeEmail = (event: { target: { value: any; }; }) => {
    setCredentialSignInObj(prevState => ({
      ...prevState,
      email: event.target.value
    }))
  }
  const signInSubmit = () => {
    let emailTest = emailRegex.test(credential.email);
    let passwordTest = passwordRegex.test(credential.password);
   
    if (emailTest === false) {
      setRegexObj((prevState: any) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "enter correct email",
      }));
    }
    else if (emailTest === true) {
      setRegexObj((prevState: any) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    }
    if (passwordTest === false) {
      setRegexObj((prevState: any) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter correct password",
      }));
    }
    else if (passwordTest === true) {
      setRegexObj((prevState: any) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper:"",
      }));
    }
     
     if(emailTest===true && passwordTest === true){
        signInApi(credential).then(resp=>{console.log(resp);localStorage.setItem("token",resp.data.result.accessToken); navigate('/Dashboard')})
        .catch(err=>console.log(err));
      }
   }
  
  // signIn all method completed 
 // SignUP all method starting
 const [ signUpObj , setSignUpCredential] = useState<{fullName:" ",phone:" ",passWord:" ",email:" "}>({fullName:" ", phone:" ",passWord:" ",email:" "});
  const signUpTakeFullName = (event:any)=>{
    setSignUpCredential(prevState => ({
      ...prevState,
      fullName: event.target.value
    }))
  }
  const signUpTakeMobileNumber = (event:any)=>{
    setSignUpCredential(prevState => ({
      ...prevState,
      phone: event.target.value
    }))
  }
  const signUpPassword = (event:any)=>{
    setSignUpCredential(prevState => ({
      ...prevState,
      passWord: event.target.value
    }))
  }
  const signUpTakeEmailId = (event:any)=>{
    setSignUpCredential(prevState => ({
      ...prevState,
      email: event.target.value
    }))
  }
  
  const[signUpRegexObj, setSignUpRegexObj] = useState<any>({
     mobileNumberBorder:false,
     mobileNumberHelper:"",
     fullNameBorder:false,
     fullNameHelper:"",
     signupemailBorder:false,
     signupemailHelper:"",
     signuppasswordBorder:false,
     signuppasswordHelper:"",
  })
  
  const SignUpSubmit = ()=>{
    let fullNameTest = fullNameRegex.test(signUpObj.fullName);
    let MobileNumberTest=MobileNumberRegex.test(signUpObj.phone);
    let signUpPasswordTest=passwordRegex.test(signUpObj.passWord);
    let signUpEmailTest =emailRegex.test(signUpObj.email);
    if (fullNameTest=== false) {
      setSignUpRegexObj((prevState: any) => ({
        ...prevState,
        fullNameBorder:true,
        fullNameHelper:"enter correct name"
      }));
    }
    else if (fullNameTest === true) {
      setSignUpRegexObj((prevState: any) => ({
        ...prevState,
        fullNameBorder:false,
        fullNameHelper:"",
      }));
    }
    if (MobileNumberTest=== false) {
      setSignUpRegexObj((prevState: any) => ({
        ...prevState,
        mobileNumberBorder:true,
        mobileNumberHelper:"enter correct mobile Number"
      }));
    }
    else if (MobileNumberTest === true) {
      setSignUpRegexObj((prevState: any) => ({
        ...prevState,
        mobileNumberBorder:false,
        mobileNumberHelper:""
      }));
    }
    
    if (signUpEmailTest===false) {
      setSignUpRegexObj((prevState: any) => ({
        ...prevState,
        signupemailBorder :true,
        signupemailHelper:"enter correct mail"
      }));
    }
    else if(signUpEmailTest === true) {
      setSignUpRegexObj((prevState: any) => ({
        ...prevState,
        signupemailBorder:false,
        signupemailHelper:"",
      }));
    } 
    if (signUpPasswordTest===false) {
      setSignUpRegexObj((prevState: any) => ({
        ...prevState,
        signuppasswordBorder:true,
        signuppasswordHelper:"enter correct password"
      }));
    }
    else if(signUpPasswordTest  === true) {
      setSignUpRegexObj((prevState: any) => ({
        ...prevState,
        signuppasswordBorder:false,
        signuppasswordHelper:"",
      }));
    }
    if(fullNameTest===true && MobileNumberTest===true && signUpPasswordTest===true && signUpEmailTest===true){
      signUpApi(signUpObj).then(resp=>console.log(resp,"response")).catch(err=>console.log(err));
      } 
    }

  
return (

    <Box sx={{
      width: '100vw',
      background: "#000000 0% 0% no-repeat padding-box",
      opacity: "0.8", 
      position: "absolute",
      height: "100vh",

    }}>
      {/* above is parent container */}
      <Box
        sx={{
          background: "#F5F5F5 0% 0% no-repeat padding-box",
          // border: "1.5px solid red",
          height: '52vh',
          width: '35%',
          marginLeft: "26vw",
          marginTop: "20vh",
          borderRadius: "21px",
          textAlign: "start"
        }}>
        <img src={pic}
          style={{
            width: "200px",
            height: "200px",
            opacity: "1",
            borderRadius: "245px",
            marginTop: "10%",
            marginLeft: "6%"
          }}
        />
        <div className="Text" style={{ marginLeft: "12%",
        font: "normal normal medium 18px/24px Roboto",
        color: "#0A0102",
        textTransform: "uppercase",
        opacity: "1",
        }}>
          OnlineBookingShop
        </div>
      </Box>
      <Box className="subdiv2"
        sx={{
          width: '22vw',
          background: 'white',
          // background: "#FFFFFF 0% 0 % no - repeat padding- box",
          boxShadow: "0px 5px 15px #00000029",
          border: "1px solid #E4E4E4",
          borderRadius: "6px",
          opacity: 1,
          height: "56vh",
          position: "absolute",
          left: "44vw",
          bottom: "26vh",
        }}
      >
        {/* child right */}
        <div style={{ margin: "15px 54px" }}
          className='InnerChildDiv'>
          <nav style={{
            display: 'flex',
            flexDirection: 'row',

            // border: '1.5px solid red',
            justifyContent: 'space-between'
          }}>
            <Box sx={{
              width: "72px",
              height: "33px",
              font: "normal normal medium 25px/33px Roboto",
              letterSpacing: "0px",
              color: "#0A0102",
              textTransform: "uppercase",
              opacity: 1,
              fontWeight: 700,
              fontSize: "large",
            }}
              onClick={setSignInPage}>LOGIN</Box>
            <Box
              sx={{
                font: "100px",
                letterSpacing: "0px",
                color: "#878787",
                textTransform: "uppercase",
                opacity: 1,
                width: "72px",
                height: "33px",
                fontWeight: 600,
                fontSize: "large",
              }}

              onClick={setSignUpPage}>SignUp</Box>
          </nav>

          <Box className="SignInForm" style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginTop: "5px"
          }}>
            {/* This below div is for email id in signIn */}
            {SignUp ? " " : <div style={{
              textAlign: "left",
              font: "normal normal normal 14px/13px Roboto",
              letterSpacing: "0px",
              color: "#0A0102",
              textTransform: "capitalize",
              opacity: 1,
            }}>
              EmailId
              <TextField size='small'
                sx={{ width: "100%" ,fontSize:"5px"}}
                inputProps={{
                  style: {
                    height: "14px",
                   },
                }}
                onChange={signInTakeEmail}
                 error={regexObj.emailBorder}
                helperText={regexObj.emailHelper}
              >
              </TextField>
            </div>}
            {/* upto this sign email id */}
            {/* This below div is for password id in signIn */}
            {SignUp ? " " : <div style={{
              textAlign: "left",
              font: "normal normal normal 14px/13px Roboto",
              letterSpacing: "0px",
              color: "#0A0102",
              textTransform: "capitalize",
              opacity: 1,
            }}>
              Password
              <TextField size="small"
                sx={{ width: "100%" }}
                inputProps={{
                  style: {
                    height: "14px",
                  },
                }}
                onChange={signInTakePassword}
                error={regexObj.passwordBorder}
                helperText={regexObj.passwordHelper}
              >
              </TextField>
              <div className='textAlign' style={{ textAlign: "end" }} >
                {SignUp ? " " : <span className='forgot-pwd' style={{ textAlign: "end" }}>forgotPassword?</span>}
              </div>
            </div>}
            {/* upto this passwd-signin  id */}
            {/* This below div is for fullName in  sigup page */}
            {SignUp ? <div style={{
              textAlign: "left",
              font: "normal normal normal 14px/13px Roboto",
              letterSpacing: "0px",
              color: "#0A0102",
              textTransform: "capitalize",
              opacity: 1,
            }}>
              FullName
              <TextField size='small'
                sx={{ width: "100%" }}
                inputProps={{
                  style: {
                    height: "14px",
                  },
                }}
               onChange={signUpTakeFullName}
               error={signUpRegexObj.fullNameBorder}
               helperText={signUpRegexObj.fullNameHelper}
              >
             </TextField>
            </div> : " "}
            {/* This above div is for fullName signup*/}
            {/* this below div is for email in signup*/}

            {SignUp ? <div style={{
              textAlign: "left",
              font: "normal normal normal 14px/13px Roboto",
              letterSpacing: "0px",
              color: "#0A0102",
              textTransform: "capitalize",
              opacity: 1,
            }}>
              EmailId for signup
              <TextField size='small'
                sx={{ width: "100%" }}
                inputProps={{
                  style: {
                    height: "14px",
                  },
                }}
               onChange={signUpTakeEmailId}
               error={signUpRegexObj.signupemailBorder}
               helperText={signUpRegexObj.signupemailHelper}
              >
              </TextField>
            </div> : ""}
            {/* upto this sign email id */}
            {/* This below div is for password id in signUp */}
            {SignUp ? <div style={{
              textAlign: "left",
              font: "normal normal normal 14px/13px Roboto",
              letterSpacing: "0px",
              color: "#0A0102",
              textTransform: "capitalize",
              opacity: 1,
            }}>
              Password for signup
              <TextField size="small"
                sx={{ width: "100%" }}
                inputProps={{
                  style: {
                    height: "14px",
                  },
                }}
              onChange={signUpPassword}
              error={signUpRegexObj.signuppasswordBorder}
              helperText={signUpRegexObj.signuppasswordHelper}
              >
              </TextField>
              {SignUp ? " " : <span className='forgot-pwd' style={{ marginLeft: "51%" }}>forgotPassword?</span>}
            </div> : " "}
            {/* upto this passwd-signin  id */}



            {/* this below div is for mobileNumber */}
            {SignUp ? <div className='MobileNumber'
              style={{
                textAlign: "left",
                font: "normal normal normal 14px/13px Roboto",
                letterSpacing: "0px",
                color: "#0A0102",
                textTransform: "capitalize",
                opacity: 1,
              }}
            >
              {SignUp ? <>MobileNumber</> : " "}
              {SignUp ? <TextField size='small'
              onChange={signUpTakeMobileNumber}
                inputProps={{
                  style: {
                    height: "14px",
                  },
                }}
              error={signUpRegexObj.mobileNumberBorder}
              helperText={signUpRegexObj.mobileNumberHelper}
              ></TextField> : " "}
            </div> : " "}
          

            {SignUp ? " " : <button style={{ background: '#A03037', height: '28px', color: 'white', border: "none",
            marginTop:"15px"  
            }}
              onClick={signInSubmit}
            >
              LOGIN
            </button>}

            {SignUp ? <button style={{ background: '#A03037', height: '28px', color: 'white', border: "none" }}
            onClick={SignUpSubmit}
            >
            SIGNUP
            </button> : " "}
            {SignUp ? "" : <div style={{ margin: "auto" ,marginTop:"15px",marginBottom:"15px"}}>
              OR
            </div>}
            {SignUp ? " " : <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '5px' }}>
              <button style={{
                background: "#4266B2 0% 0% no-repeat padding-box",
                borderRadius: "3px",
                border: "none",
                font: "normal normal normal 12px/16px Roboto",
                letterSpacing: "0px",
                height: "32px",
                color: "#FFFFFF",
                opacity: "1",
                width: "126px",
              }}>FACEBOOK</button>
              <button style={{
                // backgroundColor: "darkWhite",
                background: "#F5F5F5 0% 0% no-repeat padding-box",
                border: "1px solid #E4E4E4",
                borderRadius: "3px",
                opacity: "1",
                font: "normal normal normal 12px/16px Roboto",
                letterSpacing: "0px",
                color: "#0A0102",
                width: "119px"

              }}>GOOGLE</button>
            </Box>}
          </Box>
        </div>
      </Box>
    </Box>
  )
}
export default SignIn;