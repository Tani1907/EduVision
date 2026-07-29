const pool = require("../config/db");

const executeQuery = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({
        message: "Query is required",
      });
    }

    const result = await pool.query(query);

    res.json({
      rows: result.rows,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: err.message,
    });

  }
};

module.exports = {
  executeQuery,
};