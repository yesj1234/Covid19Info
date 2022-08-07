const express = require("express");
const router = express.Router();

const {
  getOccurData,
  getGenderData,
  getTotalData,
} = require("../controllers/covidController");

router.route("/occur").get(getOccurData);
router.route("/gender").get(getGenderData);
router.route("/total").get(getTotalData);
module.exports = router;
