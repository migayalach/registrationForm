import axios from "axios";
import {
  ADD_STATE,
  GET_STATE,
  GET_STATE_ID,
  UPDATE_STATE,
  DELETE_STATE,
  ERROR,
  ADD_PROCEDURES,
  GET_PROCEDURES,
  ADD_AREA,
  GET_AREA,
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

export const addProcedures = (procedures) => {
  return async function (dispatch) {
    const createProcedures = await axios.post(`${URL}/procedures`, procedures);
    try {
      const newProcedure = createProcedures.data;
      dispatch({
        type: ADD_PROCEDURES,
        payload: newProcedure,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getAllProcedures = () => {
  return async function (dispatch) {
    const getAllProcess = await axios.get(`${URL}/procedures`);
    const procedures = getAllProcess.data;
    dispatch({
      type: GET_PROCEDURES,
      payload: procedures,
    });
  };
};

export const addArea = (area) => {
  return async function (dispatch) {
    const createArea = await axios.post(`${URL}/area`, area);
    try {
      const newArea = createArea.data;
      dispatch({
        type: ADD_AREA,
        payload: newArea,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getAllArea = () => {
  return async function (dispatch) {
    const getAllArea = await axios.get(`${URL}/area`);
    const area = getAllArea.data;
    dispatch({
      type: GET_AREA,
      payload: area,
    });
  };
};
