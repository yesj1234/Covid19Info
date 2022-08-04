const express = require("express");
const router = express.Router();

const { getData } = require("../controllers/covidController");

router.route("/").get(getData);

module.exports = router;
