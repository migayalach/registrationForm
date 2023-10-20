import axios from "axios";
import {
  // AREA
  ADD_AREA,
  GET_AREA,
  GET_AREA_ID,
  UPDATE_AREA,
  DELETE_AREA,

  // EQUIPMENT
  ADD_EQUIPMENT,
  GET_EQUIPMENT,
  GET_EQUIPMENT_ID,
  UPDATE_EQUIPMENT,
  DELETE_EQUIPMENT,

  // USER API
  ADD_USER_API,
  GET_USER_API,
  GET_USER_API_ID,
  UPDATE_USER_API,
  DELETE_USER_API,

  // STATE
  ADD_STATE,
  GET_STATE,
  GET_STATE_ID,
  UPDATE_STATE,
  DELETE_STATE,

  // PROCEDURES
  ADD_PROCEDURES,
  GET_PROCEDURES,
  GET_PROCEDURES_ID,
  UPDATE_PROCEDURES,
  DELETE_PROCEDURES,

  // USER
  ADD_USER,
  GET_USER,
  GET_USER_ID,
  UPDATE_USER,
  DELETE_USER,

  // CREDENTIAL
  ADD_CREDENTIAL,
  GET_CREDENTIAL,
  GET_CREDENTIAL_ID,
  UPDATE_CREDENTIAL,
  DELETE_CREDENTIAL,

  // FORM
  ADD_FORM,
  GET_FORM,
  GET_FORM_ID,
  UPDATE_FORM,
  DELETE_FORM,

  // ERROR
  ERROR,

  // FILTROS
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

export const seachIdArea = (id) => {
  return async function (dispatch) {
    const infoArea = await axios.get(`${URL}/area/${id}`);
    try {
      const areaId = infoArea.data;
      dispatch({
        type: GET_AREA_ID,
        payload: areaId,
      });
    } catch (error) {}
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

export const putArea = (dataArea) => {
  return async function (dispatch) {
    const editArea = await axios.put(`${URL}/area`, dataArea);
    const area = editArea.data;
    dispatch({
      type: UPDATE_AREA,
      payload: area,
    });
  };
};

export const deleteArea = (idArea) => {
  return async function (dispatch) {
    const delArea = await axios.delete(`${URL}/area/${idArea}`);
    const area = delArea.data;
    dispatch({
      type: DELETE_AREA,
      payload: area,
    });
  };
};

export const addEquipment = (equipment) => {
  return async function (dispatch) {
    const createEquipment = await axios.post(`${URL}/equipment`, equipment);
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

export const getIdEquipment = (idEquipment) => {
  return async function (dispatch) {
    const searchIdEquipment = await axios.get(
      `${URL}/equipment/${idEquipment}`
    );
    const equipment = searchIdEquipment.data;
    dispatch({
      type: GET_EQUIPMENT_ID,
      payload: equipment,
    });
  };
};

export const putEquipment = (equipmentData) => {
  return async function (dispatch) {
    const equipmentRes = await axios.put(`${URL}/equipment/`, equipmentData);
    const equipment = equipmentRes.data;
    dispatch({
      type: UPDATE_EQUIPMENT,
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

export const getUserApiId = (idUserApi) => {
  return async function (dispatch) {
    const getDataId = await axios.get(`${URL}/userApi/${idUserApi}`);
    const getUserApi = getDataId.data;
    dispatch({
      type: GET_USER_API_ID,
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

export const postCredential = (credential) => {
  return async function (dispatch) {
    const postCredential = await axios.post(`${URL}/credential`, credential);
    try {
      const newCredential = postCredential.data;
      dispatch({
        type: ADD_CREDENTIAL,
        payload: newCredential,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
};

export const getAllCredential = () => {
  return async function (dispatch) {
    const getCredential = await axios.get(`${URL}/credential`);
    const getCredentialAll = getCredential.data;
    dispatch({
      type: GET_CREDENTIAL,
      payload: getCredentialAll,
    });
  };
};

export const postForm = (form) => {
  return async function (dispatch) {
    const createForm = await axios.post(`${URL}/form`, form);
    try {
      const newForm = createForm.data;
      dispatch({
        type: ADD_FORM,
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

export const getAllForm = () => {
  return async function (dispatch) {
    const getFormAll = await axios.get(`${URL}/form`);
    const getForms = getFormAll.data;
    dispatch({
      type: GET_FORM,
      payload: getForms,
    });
  };
};
