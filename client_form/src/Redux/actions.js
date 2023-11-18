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
  GET_USER_API,
  GET_USER_API_ID,

  // STATE
  ADD_STATE,
  GET_STATE,
  GET_STATE_ID,
  GET_STATE_NAME,
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

  // FILTER'S
  SEARCH_NAME_USER,
  SEARCH_NAME_CREDENTIAL,
  SEARCH_NAME_USER_API,

  //LOGIN
  LOGIN_ACCESS,

  // LOGOUT
  LOGOUT_ACCESS,

  // ERROR
  ERROR,

  // SUCCESS
  SUCCESS,
} from "./actions-type";

const URL = `http://localhost:3001/forms`;

//* AREA
export const addArea = (area) => {
  return async function (dispatch) {
    try {
      const createArea = await axios.post(`${URL}/area`, area);
      const newArea = createArea.data;
      dispatch({
        type: ADD_AREA,
        payload: newArea,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const seachIdArea = (id) => {
  return async function (dispatch) {
    try {
      const infoArea = await axios.get(`${URL}/area/${id}`);
      const areaId = infoArea.data;
      dispatch({
        type: GET_AREA_ID,
        payload: areaId,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getAllArea = () => {
  return async function (dispatch) {
    try {
      const getAllArea = await axios.get(`${URL}/area`);
      const area = getAllArea.data;
      dispatch({
        type: GET_AREA,
        payload: area,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const putArea = (dataArea) => {
  return async function (dispatch) {
    try {
      const editArea = await axios.put(`${URL}/area`, dataArea);
      const area = editArea.data;
      dispatch({
        type: UPDATE_AREA,
        payload: area,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const deleteArea = (idArea) => {
  return async function (dispatch) {
    try {
      const delArea = await axios.delete(`${URL}/area/${idArea}`);
      const area = delArea.data;
      dispatch({
        type: DELETE_AREA,
        payload: area,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

//* EQUIPMENT
export const addEquipment = (equipment) => {
  return async function (dispatch) {
    try {
      const createEquipment = await axios.post(`${URL}/equipment`, equipment);
      const newEquipment = createEquipment.data;
      dispatch({
        type: ADD_EQUIPMENT,
        payload: newEquipment,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getAllEquipment = () => {
  return async function (dispatch) {
    try {
      const getEquipmentAll = await axios.get(`${URL}/equipment`);
      const equipment = getEquipmentAll.data;
      dispatch({
        type: GET_EQUIPMENT,
        payload: equipment,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getIdEquipment = (idEquipment) => {
  return async function (dispatch) {
    try {
      const searchIdEquipment = await axios.get(
        `${URL}/equipment/${idEquipment}`
      );
      const equipment = searchIdEquipment.data;
      dispatch({
        type: GET_EQUIPMENT_ID,
        payload: equipment,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const putEquipment = (equipmentData) => {
  return async function (dispatch) {
    try {
      const equipmentRes = await axios.put(`${URL}/equipment/`, equipmentData);
      const equipment = equipmentRes.data;
      dispatch({
        type: UPDATE_EQUIPMENT,
        payload: equipment,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const deleteEquipment = (idEquipment) => {
  return async function (dispatch) {
    try {
      const equipmentRes = await axios.delete(
        `${URL}/equipment/${idEquipment}`
      );
      const equipment = equipmentRes.data;
      dispatch({
        type: DELETE_EQUIPMENT,
        payload: equipment,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

//* USER API
export const getAllUserApi = () => {
  return async function (dispatch) {
    try {
      const getUserApiAll = await axios.get(`${URL}/userApi`);
      const getUserApi = getUserApiAll.data;
      dispatch({
        type: GET_USER_API,
        payload: getUserApi,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getUserApiId = (idUserApi) => {
  return async function (dispatch) {
    try {
      const getDataId = await axios.get(`${URL}/userApi/${idUserApi}`);
      const getUserApi = getDataId.data;
      dispatch({
        type: GET_USER_API_ID,
        payload: getUserApi,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

//* STATE
export const addState = (stateForm) => {
  return async function (dispatch) {
    try {
      const createState = await axios.post(`${URL}/state`, stateForm);
      const newForm = createState.data;
      dispatch({
        type: ADD_STATE,
        payload: newForm,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getAllState = () => {
  return async function (dispatch) {
    try {
      const getAll = await axios.get(`${URL}/state`);
      const states = getAll.data;
      dispatch({
        type: GET_STATE,
        payload: states,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getIdState = (idState) => {
  return async function (dispatch) {
    try {
      const searchIdState = await axios.get(`${URL}/state/${idState}`);
      const state = searchIdState.data;
      dispatch({
        type: GET_STATE_ID,
        payload: state,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getStateName = (name) => {
  return async function (dispatch) {
    try {
      const searchState = await axios.get(`${URL}/state?name=${name}`);
      const stateName = searchState.data;
      dispatch({
        type: GET_STATE_NAME,
        payload: stateName,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const putState = (stateData) => {
  return async function (dispatch) {
    try {
      const stateRes = await axios.put(`${URL}/state`, stateData);
      const state = stateRes.data;
      dispatch({
        type: UPDATE_STATE,
        payload: state,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const deleteState = (idState) => {
  return async function (dispatch) {
    try {
      const stateRes = await axios.delete(`${URL}/state/${idState}`);
      const state = stateRes.data;
      dispatch({
        type: DELETE_STATE,
        payload: state,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

//* PROCEDURES
export const addProcedures = (procedures) => {
  return async function (dispatch) {
    try {
      const createProcedures = await axios.post(
        `${URL}/procedures`,
        procedures
      );
      const newProcedure = createProcedures.data;
      dispatch({
        type: ADD_PROCEDURES,
        payload: newProcedure,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getAllProcedures = () => {
  return async function (dispatch) {
    try {
      const getAllProcess = await axios.get(`${URL}/procedures`);
      const procedures = getAllProcess.data;
      dispatch({
        type: GET_PROCEDURES,
        payload: procedures,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getIdProcedures = (idProcedures) => {
  return async function (dispatch) {
    try {
      const searchProcedures = await axios.get(
        `${URL}/procedures/${idProcedures}`
      );
      const procedures = searchProcedures.data;
      dispatch({
        type: GET_PROCEDURES_ID,
        payload: procedures,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const putProcedures = (dataProcedures) => {
  return async function (dispatch) {
    try {
      const proceduresRes = await axios.put(
        `${URL}/procedures`,
        dataProcedures
      );
      const procedures = proceduresRes.data;
      dispatch({
        type: UPDATE_PROCEDURES,
        payload: procedures,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const deleteProcedures = (idProcedures) => {
  return async function (dispatch) {
    try {
      const delProcedures = await axios.delete(
        `${URL}/procedures/${idProcedures}`
      );
      const procedures = delProcedures.data;
      dispatch({
        type: DELETE_PROCEDURES,
        payload: procedures,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

//* USER
export const postUser = (userData) => {
  return async function (dispatch) {
    try {
      const postUserForm = await axios.post(`${URL}/user`, userData);
      const newUser = postUserForm.data;
      dispatch({
        type: ADD_USER,
        payload: newUser,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getNameUser = (nameUser) => {
  return async function (dispatch) {
    try {
      const getUser = await axios.get(`${URL}/user?nameUser=${nameUser}`);
      const userName = getUser.data;
      dispatch({
        type: GET_USER,
        payload: userName,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getAllUser = () => {
  return async function (dispatch) {
    try {
      const getUserAll = await axios.get(`${URL}/user`);
      const getUsers = getUserAll.data;
      dispatch({
        type: GET_USER,
        payload: getUsers,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getIdUser = (idUser) => {
  return async function (dispatch) {
    try {
      const getSearchIdUser = await axios.get(`${URL}/user/${idUser}`);
      const user = getSearchIdUser.data;
      dispatch({
        type: GET_USER_ID,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const editUser = (dataUser) => {
  return async function (dispatch) {
    try {
      const userResponse = await axios.put(`${URL}/user`, dataUser);
      const user = userResponse.data;
      dispatch({
        type: UPDATE_USER,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const deleteUser = (idUser) => {
  return async function (dispatch) {
    try {
      const userDelete = await axios.delete(`${URL}/user/${idUser}`);
      const user = userDelete.data;
      dispatch({
        type: DELETE_USER,
        payload: user,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

//* CREDENTIAL
export const postCredential = (credential) => {
  return async function (dispatch) {
    try {
      const postCredential = await axios.post(`${URL}/credential`, credential);
      const newCredential = postCredential.data;
      dispatch({
        type: ADD_CREDENTIAL,
        payload: newCredential,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getAllCredential = () => {
  return async function (dispatch) {
    try {
      const getCredential = await axios.get(`${URL}/credential`);
      const getCredentialAll = getCredential.data;
      dispatch({
        type: GET_CREDENTIAL,
        payload: getCredentialAll,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getIdCredential = (idCredential) => {
  return async function (dispatch) {
    try {
      const credentialRes = await axios.get(
        `${URL}/credential/${idCredential}`
      );
      const credential = credentialRes.data;
      dispatch({
        type: GET_CREDENTIAL_ID,
        payload: credential,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const updataCredential = (credentialData) => {
  return async function (dispatch) {
    try {
      const credentialRes = await axios.put(
        `${URL}/credential`,
        credentialData
      );
      const credential = credentialRes.data;
      dispatch({
        type: UPDATE_CREDENTIAL,
        payload: credential,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const deleteCredential = (idCredential) => {
  return async function (dispatch) {
    try {
      const credentialRes = await axios.delete(
        `${URL}/credential/${idCredential}`
      );
      const credential = credentialRes.data;
      dispatch({
        type: DELETE_CREDENTIAL,
        payload: credential,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

//* FORM
export const postForm = (form) => {
  return async function (dispatch) {
    try {
      const createForm = await axios.post(`${URL}/form`, form);
      const newForm = createForm.data;
      dispatch({
        type: ADD_FORM,
        payload: newForm,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getAllForm = () => {
  return async function (dispatch) {
    try {
      const getFormAll = await axios.get(`${URL}/form`);
      const getForms = getFormAll.data;
      dispatch({
        type: GET_FORM,
        payload: getForms,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const searchFormData = (data) => {
  return async function (dispatch) {
    try {
      const searchData = await axios.post(`${URL}/form/search`, data);
      const dataRes = searchData.data;
      dispatch({
        type: GET_FORM,
        payload: dataRes,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const getIdForm = (idForm) => {
  return async function (dispatch) {
    try {
      const getFormId = await axios.get(`${URL}/form/${idForm}`);
      const form = getFormId.data;
      dispatch({
        type: GET_FORM_ID,
        payload: form,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const updateForm = (dataForm) => {
  return async function (dispatch) {
    try {
      const putForm = await axios.put(`${URL}/form`, dataForm);
      const form = putForm.data;
      dispatch({
        type: UPDATE_FORM,
        payload: form,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

export const deleteForm = (idForm) => {
  return async function (dispatch) {
    try {
      const delForm = await axios.delete(`${URL}/form/${idForm}`);
      const form = delForm.data;
      dispatch({
        type: DELETE_FORM,
        payload: form,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};

//* FILTER'S
export const filterData = ({ location, area, nombre, order }) => {
  return async function (dispatch) {
    try {
      const searchData = await axios.get(
        `${URL}${location}?nameUser=${nombre}&nameUnit=${area}&order=${order}`
      );
      dispatch({
        type:
          (location === "/user" && SEARCH_NAME_USER) ||
          (location === "/credential" && SEARCH_NAME_CREDENTIAL) ||
          (location === "/userApi" && SEARCH_NAME_USER_API),
        payload: searchData.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
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
        payload: error.response.data,
      });
    }
  };
};

// LOGOUT
export const logout = () => {
  return function (dispatch) {
    try {
      dispatch({
        type: LOGOUT_ACCESS,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };
};
