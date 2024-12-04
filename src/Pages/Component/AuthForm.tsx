import { Box, Button } from "@mui/material";
import { FormField } from "./FormField";

interface AuthFormProps {
  formState: Record<string, string>;
  formErrors: Record<string, string>;
  onChange: (field: string, value: string) => void;
  isSignUp: boolean;
  onSubmit: () => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({
  formState,
  formErrors,
  onChange,
  isSignUp,
  onSubmit,
}) => {
  return (
    <Box sx={{paddingX:2}}>
      <FormField
        label="Email"
        value={formState.email}
        onChange={(e) => onChange("email", e.target.value)}
        error={!!formErrors.email}
        helperText={formErrors.email}
      />
      <FormField
        label="Password"
        value={formState.password}
        onChange={(e) => onChange("password", e.target.value)}
        error={!!formErrors.password}
        helperText={formErrors.password}
      />
      {isSignUp && (
        <>
          <FormField
            label="Full Name"
            value={formState.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            error={!!formErrors.fullName}
            helperText={formErrors.fullName}
          />
          <FormField
            label="Phone"
            value={formState.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
          />
        </>
      )}
      <Button onClick={onSubmit}>{isSignUp ? "SignUp" : "Login"}</Button>
    </Box>
  );
};
