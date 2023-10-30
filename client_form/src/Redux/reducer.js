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

const initialState = {
  stateForm: [],
  aux: [],
  auxExtra: [],
  procedures: [],
  area: [],
  equipment: [],
  userApi: [],
  user: [],
  credential: [],
  form: [],
  errors: null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //! AREA
    case ADD_AREA:
      return {
        ...state,
        area: [...state.area, payload.newUnit],
        errors: null,
      };

    case GET_AREA:
      return {
        ...state,
        area: payload,
        errors: null,
      };

    case GET_AREA_ID:
      return {
        ...state,
        aux: payload,
        errors: null,
      };

    case UPDATE_AREA:
      return {
        ...state,
        area: payload,
        aux: [],
        errors: null,
      };

    case DELETE_AREA:
      return {
        ...state,
        area: payload,
        errors: null,
      };

    //! EQUIPMENT
    case ADD_EQUIPMENT:
      return {
        ...state,
        equipment: payload.equipmentRes,
        errors: null,
      };

    case GET_EQUIPMENT:
      return {
        ...state,
        equipment: payload,
        errors: null,
      };

    case GET_EQUIPMENT_ID:
      return {
        ...state,
        aux: payload,
        errors: null,
      };

    case UPDATE_EQUIPMENT:
      return {
        ...state,
        equipment: payload.dataResponse,
        aux: [],
        errors: null,
      };

    case DELETE_EQUIPMENT:
      return {
        ...state,
        equipment: payload,
        errors: null,
      };

    //! USER API
    case GET_USER_API:
      return {
        ...state,
        userApi: payload,
        errors: null,
      };

    case GET_USER_API_ID:
      return {
        ...state,
        aux: [payload],
        errors: null,
      };

    //! STATE
    case ADD_STATE:
      return {
        ...state,
        stateForm: [...state.stateForm, payload.newState],
        errors: null,
      };

    case GET_STATE:
      return {
        ...state,
        stateForm: payload,
        errors: null,
      };

    case GET_STATE_ID:
      return {
        ...state,
        aux: payload,
        errors: null,
      };

    case UPDATE_STATE:
      return {
        ...state,
        stateForm: payload.editState,
        errors: null,
      };

    case DELETE_STATE:
      return {
        ...state,
        stateForm: payload.deleteInfo,
        errors: null,
      };

    //! PROCEDURES
    case ADD_PROCEDURES:
      return {
        ...state,
        procedures: [...state.procedures, payload.newProcedures],
        errors: null,
      };

    case GET_PROCEDURES:
      return {
        ...state,
        procedures: payload,
        errors: null,
      };

    case GET_PROCEDURES_ID:
      return {
        ...state,
        aux: payload,
        errors: null,
      };

    case UPDATE_PROCEDURES:
      return {
        ...state,
        procedures: payload,
        aux: [],
        errors: null,
      };

    case DELETE_PROCEDURES:
      return {
        ...state,
        procedures: payload.resultDelete,
        errors: null,
      };

    //! USER
    case ADD_USER:
      return {
        ...state,
        user: [...state.user, payload.userCreate],
        errors: null,
      };

    case GET_USER:
      return {
        ...state,
        user: payload,
        errors: null,
      };

    case GET_USER_ID:
      return {
        ...state,
        aux: payload,
        errors: null,
      };

    case UPDATE_USER:
      return {
        ...state,
        aux: [],
        user: payload.dataResponse,
        errors: null,
      };

    case DELETE_USER:
      return {
        ...state,
        user: payload,
        errors: null,
      };

    //! CREDENTIAL
    case ADD_CREDENTIAL:
      return {
        ...state,
        credential: payload.newCredential,
        errors: null,
      };

    case GET_CREDENTIAL:
      return {
        ...state,
        credential: payload,
        errors: null,
      };

    case GET_CREDENTIAL_ID:
      return {
        ...state,
        aux: [payload],
        errors: null,
      };

    case UPDATE_CREDENTIAL:
      return {
        ...state,
        aux: [],
        credential: payload.editCredential,
        errors: null,
      };

    case DELETE_CREDENTIAL:
      return {
        ...state,
        credential: payload.deleteInfo,
        errors: null,
      };

    //! FORM
    case ADD_FORM:
      return {
        ...state,
        form: payload.resCreateForm,
        errors: null,
      };

    case GET_FORM:
      return {
        ...state,
        form: payload,
        errors: null,
      };

    case GET_FORM_ID:
      return {
        ...state,
        auxExtra: [payload],
        errors: null,
      };

    case UPDATE_FORM:
      return {
        ...state,
        auxExtra: [],
        form: payload.updateData,
        errors: null,
      };

    case DELETE_FORM:
      return {
        ...state,
        form: payload.deletForm,
        errors: null,
      };

    //! ERROR
    case ERROR:
      return {
        ...state,
        errors: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
