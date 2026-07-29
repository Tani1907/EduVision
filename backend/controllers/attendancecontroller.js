const pool = require("../config/db");

const registerFace = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No Image Uploaded",
      });
    }

    const imagePath = req.file.filename;

    await pool.query(
      `
      UPDATE users
      SET face_image = $1
      WHERE id = $2
      `,
      [imagePath, req.user.id]
    );

    res.json({
      message: "Face Registered Successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const markAttendance = async (req, res) => {
  try {
    await pool.query(
      `
      INSERT INTO attendance
      (student_id, status)
      VALUES ($1, $2)
      `,
      [req.user.id, "Present"]
    );

    res.json({
      message: "Attendance Marked Successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getStudentAttendance = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT
      attendance_date,
      check_in_time,
      status
      FROM attendance
      WHERE student_id = $1
      ORDER BY attendance_date DESC
      `,
      [req.user.id]
    );

    res.json(result.rows);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  registerFace,
  markAttendance,
  getStudentAttendance,
};