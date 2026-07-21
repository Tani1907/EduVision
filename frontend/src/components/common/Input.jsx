import TextField from "@mui/material/TextField";

function Input({
  label,
  type = "text",
  value,
  onChange,
}) {
  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      fullWidth
      margin="normal"
    />
  );
}

export default Input;