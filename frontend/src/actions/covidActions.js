import {
  COVIDOCCUR_LIST_FAIL,
  COVIDOCCUR_LIST_SUCCESS,
  COVIDOCCUR_LIST_REQUEST,
  COVIDGENDER_LIST_FAIL,
  COVIDGENDER_LIST_SUCCESS,
  COVIDGENDER_LIST_REQUEST,
  COVIDTOTAL_LIST_FAIL,
  COVIDTOTAL_LIST_SUCCESS,
  COVIDTOTAL_LIST_REQUEST,
} from "../constants/covidConstants";
import axios from "axios";
// import xml2js from "xml2js";
export const getOccurData =
  (std = "2022-04-15", gubun = "서울") =>
  async (dispatch) => {
    try {
      dispatch({
        type: COVIDOCCUR_LIST_REQUEST,
      });
      const params = { date: std, gubun: gubun };
      const { data } = await axios({
        method: "get",
        url: `/api/covid-info/occur`,
        params: params,
      });
      const initialObj = JSON.parse(data);
      const infoObj = initialObj.response.body[0].items[0].item[0];
      dispatch({
        type: COVIDOCCUR_LIST_SUCCESS,
        payload: infoObj,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: COVIDOCCUR_LIST_FAIL,
        payload: message,
      });
    }
  };

export const getGenderData =
  (startDt = "20200310", endDt = "20200415") =>
  async (dispatch) => {
    try {
      dispatch({
        type: COVIDGENDER_LIST_REQUEST,
      });
      const params = { startCreateDt: startDt, endCreateDt: endDt };
      const { item } = await axios({
        method: "get",
        url: `/api/covid-info/gender`,
        params: params,
      }).then((res) => {
        return res.data;
      });

      dispatch({
        type: COVIDGENDER_LIST_SUCCESS,
        payload: item,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: COVIDGENDER_LIST_FAIL,
        payload: message,
      });
    }
  };

export const getTotalData =
  (std = "20220425") =>
  async (dispatch) => {
    try {
      dispatch({
        type: COVIDTOTAL_LIST_REQUEST,
      });
      const params = { date: std };
      const { data } = await axios({
        method: "get",
        url: `/api/covid-info/total`,
        params: params,
      });
      const initialObj = JSON.parse(data);
      const infoObj = initialObj.response.body[0].items[0].item[0];
      dispatch({
        type: COVIDTOTAL_LIST_SUCCESS,
        payload: infoObj,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: COVIDTOTAL_LIST_FAIL,
        payload: message,
      });
    }
  };
