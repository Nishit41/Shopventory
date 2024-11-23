import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { signInApi, signUpApi } from "./Services/userservices";
import { validateInput } from "./utils/ValidateInput";
import { FormField } from "./Component/FormField";

const SignIn = () => {
  const [SignUp, setSignUp] = useState(false);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleValidation = () => {
    const errors: any = {};
    if (!validateInput("email", formState.email))
      errors.email = "Invalid email";
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

    if (SignUp) {
      signUpApi(formState).then(console.log).catch(console.error);
    } else {
      signInApi({ email: formState.email, password: formState.password })
        .then((resp) => {
          localStorage.setItem("token", resp?.data?.result.accessToken);
          navigate("/Dashboard");
        })
        .catch(console.error);
    }
  };

  return (
    <Box>
      <Box>
        <Button onClick={() => setSignUp(false)}>Login</Button>
        <Button onClick={() => setSignUp(true)}>SignUp</Button>
      </Box>
      <FormField
        label="Email"
        value={formState.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={!!formErrors.email}
        helperText={formErrors.email}
      />
      <FormField
        label="Password"
        value={formState.password}
        onChange={(e) => handleChange("password", e.target.value)}
        error={!!formErrors.password}
        helperText={formErrors.password}
      />
      {SignUp && (
        <>
          <FormField
            label="Full Name"
            value={formState.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            error={!!formErrors.fullName}
            helperText={formErrors.fullName}
          />
          <FormField
            label="Phone"
            value={formState.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
          />
        </>
      )}
      <Button onClick={handleSubmit}>{SignUp ? "SignUp" : "Login"}</Button>
    </Box>
  );
};

export default SignIn;
