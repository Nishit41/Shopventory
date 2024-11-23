import { TextField } from "@mui/material";

export const FormField = ({ label, value, onChange, error, helperText }: {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
  }) => (
    <div style={{ textAlign: "left", marginBottom: "10px" }}>
      {label}
      <TextField
        size="small"
        fullWidth
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
      />
    </div>
  );
  