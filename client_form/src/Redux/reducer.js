import {
  ADD_STATE,
  GET_STATE,
  GET_STATE_ID,
  UPDATE_STATE,
  DELETE_STATE,
  ERROR,
  ADD_PROCEDURES,
  GET_PROCEDURES,
} from "./actions-type";

const initialState = {
  stateForm: [],
  aux: [],
  procedures: [],
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
