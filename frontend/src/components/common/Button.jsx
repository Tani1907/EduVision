import Button from "@mui/material/Button";

function CustomButton({
  text,
  onClick,
  type = "button",
  fullWidth = true,
}) {
  return (
    <Button
      variant="contained"
      type={type}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        mt: 2,
        py: 1.4,
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "16px",
        textTransform: "none",
        backgroundColor: "#2563EB",
        "&:hover": {
          backgroundColor: "#1E40AF",
        },
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;