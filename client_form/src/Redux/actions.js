import axios from "axios";
import {
  ADD_STATE,
  GET_STATE,
  GET_STATE_ID,
  UPDATE_STATE,
  DELETE_STATE,
  ERROR,
} from "./actions-type";

const URL = `http://localhost:3001/forms`;

export const addState = (stateForm) => {
  return async function (dispatch) {
    const createState = await axios.post(`${URL}/state`, stateForm);
    try {
      const newForm = createState.data;
      dispatch({
        type: ADD_STATE,
        payload: newForm,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getAllState = () => {
  return async function (dispatch) {
    const getAll = await axios.get(`${URL}/state`);
    const states = getAll.data;
    dispatch({
      type: GET_STATE,
      payload: states,
    });
  };
};
