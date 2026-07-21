import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Link,
} from "@mui/material";

import Input from "../../components/common/Input";
import CustomButton from "../../components/common/Button";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rollNo: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        sx={{ p: 5, mt: 5, borderRadius: 4 }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
        >
          Create Account
        </Typography>

        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Input
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Input
          label="Roll Number"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
        />

        <Input
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <CustomButton text="Register" />

        <Box mt={2} textAlign="center">
          <Link href="/">Already have an account? Login</Link>
        </Box>
      </Paper>
    </Container>
  );
}

export default Register;