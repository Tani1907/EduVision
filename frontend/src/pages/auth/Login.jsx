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
  const [errors, setErrors] = useState({});

const validate = () => {

  let temp = {};

  if(!email){

temp.email="Email is required";

}

else if(
!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
){

temp.email="Invalid Email";

}

  if(!password){

temp.password="Password is required";

}

else if(password.length<8){

temp.password="Minimum 8 characters";

}

  setErrors(temp);

  return Object.keys(temp).length === 0;
};

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
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
        />

        <CustomButton
text="Login"
onClick={()=>{
if(validate()){
console.log("Login");
}
}}
/>

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