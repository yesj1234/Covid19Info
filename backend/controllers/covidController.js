const asyncHandler = require("express-async-handler");
const xml2js = require("xml2js");
const axios = require("axios");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
// const request = require("request");

// @description Get datas from open api
// @route       GET /api/covid-info
// @access      Public
const getData = asyncHandler(async (req, res) => {
  const url =
    `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=${process.env.SERVICEKEY}&pageNo=1&numOfRows=500&apiType=xml&std_day=2021-12-15&gubun=` +
    encodeURI("서울");

  const xmlResponse = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      const parser = new xml2js.Parser();
      parser
        .parseStringPromise(data)
        .then((result) => {
          const json = JSON.stringify(result);

          res.json(json);
        })
        .catch((err) => console.log(err));
    });
});

module.exports = { getData };
