import {
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_SUCCESS,
  POST_DELETE_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_UPDATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_SUCCESS,
} from "../constants/boardConstants";
import axios from "axios";

export const listPosts = () => async (dispatch) => {
  try {
    dispatch({
      type: POST_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/board`);

    dispatch({
      type: POST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: POST_LIST_FAIL,
      payload: message,
    });
  }
};

export const createPostAction = (content) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`api/board/create`, { content }, config);

    dispatch({
      type: POST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: POST_CREATE_FAIL,
      payload: message,
    });
  }
};

export const deletePostAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(`/api/board/${id}`, config);
    dispatch({
      type: POST_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: POST_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updatePostAction = (id, content) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POST_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`/api/board/${id}`, { content }, config);
    dispatch({
      type: POST_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: POST_UPDATE_FAIL,
      payload: message,
    });
  }
};
