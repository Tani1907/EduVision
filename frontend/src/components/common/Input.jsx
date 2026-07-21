import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Input({
  label,
  type = "text",
  value,
  onChange,
  name,
  error,
helperText
}) {

  const [showPassword, setShowPassword] = useState(false);

  const isPassword =
    type === "password";

  return (
    <TextField
      fullWidth
      margin="normal"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
helperText={helperText}
      type={
        isPassword
          ? showPassword
            ? "text"
            : "password"
          : type
      }
      InputProps={{
        endAdornment: isPassword && (
          <InputAdornment position="end">

            <IconButton
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <VisibilityOff />
              ) : (
                <Visibility />
              )}
            </IconButton>

          </InputAdornment>
        ),
      }}
    />
  );
}

export default Input;