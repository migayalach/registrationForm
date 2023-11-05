import axios from "axios";
import { dataSend } from "../Utils/clearFunctions";
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

  //LOGIN
  LOGIN_ACCESS,

  // LOGOUT
  LOGOUT_ACCESS,

  // ERROR
  ERROR,

  // FILTROS
} from "./actions-type";

const URL = `http://localhost:3001/forms`;

//* AREA
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

//* EQUIPMENT
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

export const deleteEquipment = (idEquipment) => {
  return async function (dispatch) {
    const equipmentRes = await axios.delete(`${URL}/equipment/${idEquipment}`);
    const equipment = equipmentRes.data;
    dispatch({
      type: DELETE_EQUIPMENT,
      payload: equipment,
    });
  };
};

//* USER API
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

//* STATE
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

export const getIdState = (idState) => {
  return async function (dispatch) {
    const searchIdState = await axios.get(`${URL}/state/${idState}`);
    const state = searchIdState.data;
    dispatch({
      type: GET_STATE_ID,
      payload: state,
    });
  };
};

export const putState = (stateData) => {
  return async function (dispatch) {
    const stateRes = await axios.put(`${URL}/state`, stateData);
    const state = stateRes.data;
    dispatch({
      type: UPDATE_STATE,
      payload: state,
    });
  };
};

export const deleteState = (idState) => {
  return async function (dispatch) {
    const stateRes = await axios.delete(`${URL}/state/${idState}`);
    const state = stateRes.data;
    dispatch({
      type: DELETE_STATE,
      payload: state,
    });
  };
};

//* PROCEDURES
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

export const getIdProcedures = (idProcedures) => {
  return async function (dispatch) {
    const searchProcedures = await axios.get(
      `${URL}/procedures/${idProcedures}`
    );
    const procedures = searchProcedures.data;
    dispatch({
      type: GET_PROCEDURES_ID,
      payload: procedures,
    });
  };
};

export const putProcedures = (dataProcedures) => {
  return async function (dispatch) {
    const proceduresRes = await axios.put(`${URL}/procedures`, dataProcedures);
    const procedures = proceduresRes.data;
    dispatch({
      type: UPDATE_PROCEDURES,
      payload: procedures,
    });
  };
};

export const deleteProcedures = (idProcedures) => {
  return async function (dispatch) {
    const delProcedures = await axios.delete(
      `${URL}/procedures/${idProcedures}`
    );
    const procedures = delProcedures.data;
    dispatch({
      type: DELETE_PROCEDURES,
      payload: procedures,
    });
  };
};

//* USER
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

export const getNameUser = (nameUser) => {
  return async function (dispatch) {
    const getUser = await axios.get(`${URL}/user?nameUser=${nameUser}`);
    const userName = getUser.data;
    dispatch({
      type: GET_USER,
      payload: userName,
    });
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

export const getIdUser = (idUser) => {
  return async function (dispatch) {
    const getSearchIdUser = await axios.get(`${URL}/user/${idUser}`);
    const user = getSearchIdUser.data;
    dispatch({
      type: GET_USER_ID,
      payload: user,
    });
  };
};

export const editUser = (dataUser) => {
  return async function (dispatch) {
    const userResponse = await axios.put(`${URL}/user`, dataUser);
    const user = userResponse.data;
    dispatch({
      type: UPDATE_USER,
      payload: user,
    });
  };
};

export const deleteUser = (idUser) => {
  return async function (dispatch) {
    const userDelete = await axios.delete(`${URL}/user/${idUser}`);
    const user = userDelete.data;
    dispatch({
      type: DELETE_USER,
      payload: user,
    });
  };
};

//* CREDENTIAL
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

export const getIdCredential = (idCredential) => {
  return async function (dispatch) {
    const credentialRes = await axios.get(`${URL}/credential/${idCredential}`);
    const credential = credentialRes.data;
    dispatch({
      type: GET_CREDENTIAL_ID,
      payload: credential,
    });
  };
};

export const updataCredential = (credentialData) => {
  return async function (dispatch) {
    const credentialRes = await axios.put(`${URL}/credential`, credentialData);
    const credential = credentialRes.data;
    dispatch({
      type: UPDATE_CREDENTIAL,
      payload: credential,
    });
  };
};

export const deleteCredential = (idCredential) => {
  return async function (dispatch) {
    const credentialRes = await axios.delete(
      `${URL}/credential/${idCredential}`
    );
    const credential = credentialRes.data;
    dispatch({
      type: DELETE_CREDENTIAL,
      payload: credential,
    });
  };
};

//* FORM
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

export const getIdForm = (idForm) => {
  return async function (dispatch) {
    const getFormId = await axios.get(`${URL}/form/${idForm}`);
    const form = getFormId.data;
    dispatch({
      type: GET_FORM_ID,
      payload: form,
    });
  };
};

export const updateForm = (dataForm) => {
  return async function (dispatch) {
    const putForm = await axios.put(`${URL}/form`, dataForm);
    const form = putForm.data;
    dispatch({
      type: UPDATE_FORM,
      payload: form,
    });
  };
};

export const deleteForm = (idForm) => {
  return async function (dispatch) {
    const delForm = await axios.delete(`${URL}/form/${idForm}`);
    const form = delForm.data;
    dispatch({
      type: DELETE_FORM,
      payload: form,
    });
  };
};

//* LOGIN
export const login = (data) => {
  return async function (dispatch) {
    try {
      const access = await axios.post(`${URL}/login`, data);
      dispatch({
        type: LOGIN_ACCESS,
        payload: access.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data.error,
      });
    }
  };
};

// LOGOUT
export const logout = () => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_ACCESS,
    });
  };
};

//* ERROR
