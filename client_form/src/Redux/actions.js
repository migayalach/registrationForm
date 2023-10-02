import axios from "axios";
import {
  ADD_STATE,
  GET_STATE,
  GET_STATE_ID,
  UPDATE_STATE,
  DELETE_STATE,
} from "./actions-type";

const URL = `http://localhost:3001/forms`;

export const addState = (stateForm) => {
  return async function (dispatch) {
    const createState = await axios.get(`${URL}`);
    const stateForm = createState.data;
    dispatch({
      type: ADD_STATE,
      payload: stateForm,
    });
  };
};
