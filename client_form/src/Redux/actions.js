import axios from "axios";
import {
  ADD_STATE,
  GET_STATE,
  GET_STATE_ID,
  UPDATE_STATE,
  DELETE_STATE,
  ERROR,
  ADD_EQUIPMENT,
  GET_EQUIPMENT,
  ADD_PROCEDURES,
  GET_PROCEDURES,
  ADD_AREA,
  GET_AREA,
  ADD_USER_API,
  GET_USER_API,
  ADD_USER,
  GET_USER,
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

export const addEquipment = (equipment) => {
  return async function (dispatch) {
    const createEquipment = await axios.post(`${URL}/equipment`, equipment);
    console.log(createEquipment);
    try {
      const newEquipment = createEquipment.data;
      dispatch({
        type: ADD_EQUIPMENT,
        payload: newEquipment,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getAllEquipment = () => {
  return async function (dispatch) {
    const getEquipmentAll = await axios.get(`${URL}/equipment`);
    const equipment = getEquipmentAll.data;
    dispatch({
      type: GET_EQUIPMENT,
      payload: equipment,
    });
  };
};

export const addUserApi = () => {
  return function (dispatch) {};
};

export const getAllUserApi = () => {
  return async function (dispatch) {
    const getUserApiAll = await axios.get(`${URL}/userApi`);
    const getUserApi = getUserApiAll.data;
    dispatch({
      type: GET_USER_API,
      payload: getUserApi,
    });
  };
};

export const postUser = (userData) => {
  return async function (dispatch) {
    const postUserForm = await axios.post(`${URL}/user`, userData);
    try {
      const newUser = postUserForm.data;
      dispatch({
        type: ADD_USER,
        payload: newUser,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getAllUser = () => {
  return async function (dispatch) {
    const getUserAll = await axios.get(`${URL}/user`);
    const getUsers = getUserAll.data;
    dispatch({
      type: GET_USER,
      payload: getUsers,
    });
  };
};
