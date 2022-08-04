import {
  COVIDINFO_LIST_FAIL,
  COVIDINFO_LIST_SUCCESS,
  COVIDINFO_LIST_REQUEST,
} from "../constants/covidConstants";

export const covidInfoReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case COVIDINFO_LIST_REQUEST:
      return { loading: true };
    case COVIDINFO_LIST_SUCCESS:
      return { loading: false, data: action.payload };
    case COVIDINFO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
