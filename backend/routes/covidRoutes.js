const express = require("express");
const router = express.Router();

const {
  getOccurData,
  getGenderData,
} = require("../controllers/covidController");

router.route("/occur").get(getOccurData);
router.route("/gender").get(getGenderData);

module.exports = router;
