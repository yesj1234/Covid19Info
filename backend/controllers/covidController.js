const asyncHandler = require("express-async-handler");
const xml2js = require("xml2js");
const axios = require("axios");
// const fetch = (...args) =>
//   import("node-fetch").then(({ default: fetch }) => fetch(...args));
// const request = require("request");

// @description Get datas from open api
// @route       GET /api/covid-info/occur
// @access      Public
const getOccurData = asyncHandler(async (req, res) => {
  console.log(req.query);
  let { date, gubun } = req.query;
  date = encodeURI(date);
  gubun = encodeURI(gubun);
  const url = `http://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=${process.env.SERVICEKEY}&pageNo=1&numOfRows=500&apiType=xml&std_day=${date}&gubun=${gubun}`;

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

// @description Get datas from open api
// @route       GET /api/covid-info/gender
// @access      Public
const getGenderData = asyncHandler(async (req, res) => {
  let { startCreateDt, endCreateDt } = req.query;
  startCreateDt = encodeURI(startCreateDt);
  endCreateDt = encodeURI(endCreateDt);
  const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19GenAgeCaseInfJson?serviceKey=${process.env.SERVICEKEY}&pageNo=1&numOfRows=10&apiType=xml&startCreateDt=${startCreateDt}&endCreateDt=${endCreateDt}`;

  const xmlResponse = await axios
    .get(url)
    .then((res) => {
      return res.data.response.body.items;
    })
    .then((data) => {
      res.json(data);
    });
});

// @description Get datas from open api
// @route       GET /api/covid-info/total
// @access      Public
const getTotalData = asyncHandler(async (req, res) => {
  let { date } = req.query;
  date = encodeURI(date);
  const url = `http://apis.data.go.kr/1352000/ODMS_COVID_02/callCovid02Api?serviceKey=${process.env.SERVICEKEY}&pageNo=1&numOfRows=500&apiType=xml&status_dt=${date}`;

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

module.exports = { getOccurData, getGenderData, getTotalData };
