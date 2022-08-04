import {
  COVIDINFO_LIST_FAIL,
  COVIDINFO_LIST_SUCCESS,
  COVIDINFO_LIST_REQUEST,
} from "../constants/covidConstants";
import axios from "axios";
// import xml2js from "xml2js";
export const getData = () => async (dispatch) => {
  try {
    dispatch({
      type: COVIDINFO_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/covid-info`);
    const initialObj = JSON.parse(data);
    const infoObj = initialObj.response.body[0].items[0].item[0];
    dispatch({
      type: COVIDINFO_LIST_SUCCESS,
      payload: infoObj,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COVIDINFO_LIST_FAIL,
      payload: message,
    });
  }
};
