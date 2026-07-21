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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={4}
        sx={{
          p: 5,
          mt: 8,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
        >
          EduVision
        </Typography>

        <Typography
          align="center"
          sx={{ mb: 4 }}
        >
          Welcome Back
        </Typography>

        <Input
          label="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <CustomButton text="Login" />

        <Box
          display="flex"
          justifyContent="space-between"
          mt={2}
        >
          <Link href="/forgot-password">
            Forgot Password?
          </Link>

          <Link href="/register">
            Register
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;