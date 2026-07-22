const pool = require("../config/db");

const createUser = async (
  name,
  email,
  phone,
  roll_no,
  department,
  password,
  role
) => {
  const query = `
    INSERT INTO users
    (name,email,phone,roll_no,department,password,role)
    VALUES($1,$2,$3,$4,$5,$6,$7)
    RETURNING *;
  `;

  const values = [
    name,
    email,
    phone,
    roll_no,
    department,
    password,
    role,
  ];

  const result = await pool.query(query, values);

  return result.rows[0];
};

const findUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  return result.rows[0];
};
const findUserById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE id=$1",
    [id]
  );

  return result.rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};