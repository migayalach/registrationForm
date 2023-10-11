import {
  ADD_STATE,
  GET_STATE,
  GET_STATE_ID,
  UPDATE_STATE,
  DELETE_STATE,
  ERROR,
  ADD_PROCEDURES,
  GET_PROCEDURES,
  GET_AREA,
  ADD_AREA,
  GET_USER_API,
  GET_USER_API_ID,
  ADD_EQUIPMENT,
  GET_EQUIPMENT,
  ADD_USER,
  GET_USER,
  ADD_CREDENTIAL,
  GET_CREDENTIAL,
  ADD_FORM,
  GET_FORM,
} from "./actions-type";

const initialState = {
  stateForm: [],
  aux: [],
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

    case ADD_EQUIPMENT:
      return {
        ...state,
        equipment: [...state.equipment, payload.equipmentRes],
        errors: null,
      };

    case GET_EQUIPMENT:
      return {
        ...state,
        equipment: payload,
        errors: null,
      };

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

    case ADD_CREDENTIAL:
      return {
        ...state,
        credential: [...state.credential, payload.newCredential],
        errors: null,
      };

    case GET_CREDENTIAL:
      return {
        ...state,
        credential: payload,
        errors: null,
      };

    case ADD_FORM:
      return {
        ...state,
        form: [...state.form, payload.resCreateForm],
        errors: null,
      };

    case GET_FORM:
      return {
        ...state,
        form: payload,
        errors: null,
      };

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
