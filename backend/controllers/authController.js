const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {

  try {
    const {
      name,
      email,
      phone,
      roll_no,
      department,
      password,
    } = req.body;

    const existing = await User.findUserByEmail(email);

    if (existing) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.createUser(
      name,
      email,
      phone,
      roll_no,
      department,
      hashedPassword,
      "student"
    );

    res.status(201).json({
      message: "User Registered Successfully",
      user,
    });
  } catch (err) {
  console.log(err);

  res.status(500).json({
    message: "Server Error",
  });
}
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findUserByEmail(email);

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      message: "Login Successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  register,
  login,
};