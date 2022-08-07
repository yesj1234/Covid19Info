import {
  COVIDOCCUR_LIST_FAIL,
  COVIDOCCUR_LIST_SUCCESS,
  COVIDOCCUR_LIST_REQUEST,
  COVIDGENDER_LIST_FAIL,
  COVIDGENDER_LIST_SUCCESS,
  COVIDGENDER_LIST_REQUEST,
} from "../constants/covidConstants";

export const covidOccurReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case COVIDOCCUR_LIST_REQUEST:
      return { loading: true };
    case COVIDOCCUR_LIST_SUCCESS:
      return { loading: false, data: action.payload };
    case COVIDOCCUR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const covidGenderReducer = (state = {}, action) => {
  switch (action.type) {
    case COVIDGENDER_LIST_REQUEST:
      return { loading: true };
    case COVIDGENDER_LIST_SUCCESS:
      return { loading: false, data: action.payload };
    case COVIDGENDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
