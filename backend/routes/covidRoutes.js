const express = require("express");
const router = express.Router();

const {
  getOccurData,
  getGenderData,
  getTotalData,
  getHospitalData,
} = require("../controllers/covidController");

router.route("/occur").get(getOccurData);
router.route("/gender").get(getGenderData);

router.route("/hospital").get(getHospitalData);
module.exports = router;
