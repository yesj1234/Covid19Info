import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  covidOccurReducer,
  covidGenderReducer,
} from "./reducers/covidReducers";
import {
  noteCreateReducer,
  noteDeleteReducer,
  noteListReducer,
  noteUpdateReducer,
} from "./reducers/notesReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  postCreateReducer,
  postDeleteReducer,
  postListReducer,
  postUpdateReducer,
} from "./reducers/boardReducers";

const reducer = combineReducers({
  covidGender: covidGenderReducer,
  covidOccur: covidOccurReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  noteCreate: noteCreateReducer,
  noteList: noteListReducer,
  noteDelete: noteDeleteReducer,
  noteUpdate: noteUpdateReducer,
  postCreate: postCreateReducer,
  postDelete: postDeleteReducer,
  postList: postListReducer,
  postUpdate: postUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
