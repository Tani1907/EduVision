const express = require("express");

const router = express.Router();

const upload = require("../config/upload");

const authMiddleware = require("../middleware/authMiddleware");

const {
  registerFace,
  markAttendance,
  getStudentAttendance,
} = require("../controllers/attendanceController");
router.post(
  "/register-face",
  authMiddleware,
  upload.single("face"),
  registerFace
);

router.post(
  "/mark",
  authMiddleware,
  markAttendance
);

router.get(
  "/history",
  authMiddleware,
  getStudentAttendance
);
module.exports = router;