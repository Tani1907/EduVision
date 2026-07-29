const express = require("express");

const router = express.Router();

const {
  executeQuery,
} = require("../controllers/sqlController");

router.post(
  "/execute",
  executeQuery
);

module.exports = router;