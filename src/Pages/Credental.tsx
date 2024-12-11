import { useState } from "react";
import { AppBar, Box,Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { signInApi, signUpApi } from "./Services/userservices";
import { validateInput } from "./utils/ValidateInput";
import { EMPTY_STRING } from "./utils/constant";
import { AuthForm } from "../Component/AuthForm";

const SignIn = () => {
  const [SignUp, setSignUp] = useState(false);
  const [formState, setFormState] = useState({
    email: EMPTY_STRING,
    password: EMPTY_STRING,
    fullName: EMPTY_STRING,
    phone: EMPTY_STRING,
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleValidation = () => {
    const errors: Record<string, string> = {};
    if (!validateInput("email", formState.email)) errors.email = "Invalid email";
    if (!validateInput("password", formState.password))
      errors.password = "Invalid password";
    if (SignUp && !validateInput("fullName", formState.fullName))
      errors.fullName = "Invalid name";
    if (SignUp && !validateInput("phone", formState.phone))
      errors.phone = "Invalid phone number";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!handleValidation()) return;
    const apiCall = SignUp
      ? signUpApi(formState)
      : signInApi({ email: formState.email, password: formState.password });

    apiCall
      .then((resp) => {
        if (!SignUp) {
          localStorage.setItem("token", resp?.data?.result.accessToken);
          navigate("/dashboard");
        }
      })
      .catch(console.error);
  };

  return (
    <Box sx={{width:{md:"40%"}, margin:"auto",background:"orange",marginTop:20}}>
      <Box sx={{paddingBottom:5}}>
        <AppBar position="sticky" >
        <Toolbar sx={{gap:2}}> 
        <Typography onClick={() => setSignUp(false)} >Login</Typography>
        <Typography onClick={() => setSignUp(true)} >SignUp</Typography>
      </Toolbar>
       </AppBar>
      </Box>
      <AuthForm
        formState={formState}
        formErrors={formErrors}
        onChange={handleChange}
        isSignUp={SignUp}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default SignIn;
