const express = require("express");

const router = express.Router();

const {
    debugSQL
} = require("../controllers/aiController");

router.post(
    "/sql-debug",
    debugSQL
);

module.exports = router;