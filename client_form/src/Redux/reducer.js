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

  //LOGIN
  LOGIN_ACCESS,

  // LOGOUT
  LOGOUT_ACCESS,

  // ERROR
  ERROR,
} from "./actions-type";

const initialState = {
  stateForm: [],
  aux: [],
  auxExtra: [],
  auxUser: [],
  procedures: [],
  area: [],
  equipment: [],
  userApi: [],
  user: [],
  credential: [],
  form: [],
  errors: null,
  success: null,
  filter: null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //! AREA
    case ADD_AREA:
      return {
        ...state,
        area: [...state.area, payload.newUnit],
        success: { unit: payload.unit, message: payload.message },
        errors: null,
        filter: null,
      };

    case GET_AREA:
      return {
        ...state,
        area: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case GET_AREA_ID:
      return {
        ...state,
        aux: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case UPDATE_AREA:
      return {
        ...state,
        area: payload.updateData,
        success: { unit: payload.unit, message: payload.message },
        aux: [],
        errors: null,
        filter: null,
      };

    case DELETE_AREA:
      return {
        ...state,
        area: payload.deleteData,
        success: { unit: payload.unit, message: payload.message },
        errors: null,
        filter: null,
      };

    //! EQUIPMENT
    case ADD_EQUIPMENT:
      return {
        ...state,
        equipment: payload.equipmentRes,
        success: { equipment: payload.equipment, message: payload.message },
        errors: null,
        filter: null,
      };

    case GET_EQUIPMENT:
      return {
        ...state,
        equipment: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case GET_EQUIPMENT_ID:
      return {
        ...state,
        aux: payload,
        success: null,
        errors: null,
      };

    case UPDATE_EQUIPMENT:
      return {
        ...state,
        equipment: payload.dataResponse,
        aux: [],
        success: { equipment: payload.equipment, message: payload.message },
        errors: null,
        filter: null,
      };

    case DELETE_EQUIPMENT:
      return {
        ...state,
        equipment: payload.delEquipment,
        success: { equipment: payload.equipment, message: payload.message },
        errors: null,
        filter: null,
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
        success: { state: payload.state, message: payload.message },
        errors: null,
        filter: null,
      };

    case GET_STATE:
      return {
        ...state,
        stateForm: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case GET_STATE_ID:
      return {
        ...state,
        aux: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case GET_STATE_NAME: {
      return {
        ...state,
        stateForm: payload,
        success: null,
        errors: null,
        filter: null,
      };
    }

    case UPDATE_STATE:
      return {
        ...state,
        stateForm: payload.editState,
        success: { state: payload.state, message: payload.message },
        errors: null,
        filter: null,
      };

    case DELETE_STATE:
      return {
        ...state,
        stateForm: payload.deleteInfo,
        success: { state: payload.state, message: payload.message },
        errors: null,
        filter: null,
      };

    //! PROCEDURES
    case ADD_PROCEDURES:
      return {
        ...state,
        procedures: [...state.procedures, payload.newProcedures],
        success: { procedure: payload.procedure, message: payload.message },
        errors: null,
        filter: null,
      };

    case GET_PROCEDURES:
      return {
        ...state,
        procedures: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case GET_PROCEDURES_ID:
      return {
        ...state,
        aux: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case UPDATE_PROCEDURES:
      return {
        ...state,
        procedures: payload.updateData,
        aux: [],
        success: { procedure: payload.procedure, message: payload.message },
        errors: null,
        filter: null,
      };

    case DELETE_PROCEDURES:
      return {
        ...state,
        procedures: payload.resultDelete,
        success: { procedure: payload.procedure, message: payload.message },
        errors: null,
        filter: null,
      };

    //! USER
    case ADD_USER:
      return {
        ...state,
        user: [...state.user, payload.userCreate],
        success: { user: payload.user, message: payload.message },
        errors: null,
        filter: null,
      };

    case GET_USER:
      return {
        ...state,
        user: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case GET_USER_ID:
      return {
        ...state,
        aux: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case UPDATE_USER:
      return {
        ...state,
        aux: [],
        user: payload.dataResponse,
        success: { user: payload.user, message: payload.message },
        errors: null,
        filter: null,
      };

    case DELETE_USER:
      return {
        ...state,
        user: payload.deleteUser,
        success: { user: payload.user, message: payload.message },
        errors: null,
        filter: null,
      };

    //! CREDENTIAL
    case ADD_CREDENTIAL:
      return {
        ...state,
        credential: payload.newCredential,
        success: { credential: payload.credential, message: payload.message },
        errors: null,
        filter: null,
      };

    case GET_CREDENTIAL:
      return {
        ...state,
        credential: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case GET_CREDENTIAL_ID:
      return {
        ...state,
        aux: [payload],
        success: null,
        errors: null,
        filter: null,
      };

    case UPDATE_CREDENTIAL:
      return {
        ...state,
        aux: [],
        credential: payload.editCredential,
        success: { credential: payload.credential, message: payload.message },
        errors: null,
        filter: null,
      };

    case DELETE_CREDENTIAL:
      return {
        ...state,
        credential: payload.deleteInfo,
        success: { credential: payload.credential, message: payload.message },
        errors: null,
        filter: null,
      };

    //! FORM
    case ADD_FORM:
      return {
        ...state,
        form: payload.resCreateForm,
        success: { form: payload.form, message: payload.message },
        errors: null,
        filter: null,
      };

    case GET_FORM:
      return {
        ...state,
        form: payload,
        success: null,
        errors: null,
        filter: null,
      };

    case GET_FORM_ID:
      return {
        ...state,
        auxExtra: [payload],
        success: null,
        errors: null,
        filter: null,
      };

    case UPDATE_FORM:
      return {
        ...state,
        auxExtra: [],
        form: payload.updateData,
        success: { form: payload.form, message: payload.message },
        errors: null,
        filter: null,
      };

    case DELETE_FORM:
      return {
        ...state,
        form: payload.deletForm,
        success: { form: payload.form, message: payload.message },
        errors: null,
        filter: null,
      };

    //! FILTER'S
    case SEARCH_NAME_USER: {
      return {
        ...state,
        filter: payload,
        errors: null,
      };
    }

    case SEARCH_NAME_CREDENTIAL: {
      return {
        ...state,
        filter: payload,
        errors: null,
      };
    }

    //! LOGIN
    case LOGIN_ACCESS:
      return {
        ...state,
        auxUser: [payload],
        errors: null,
        filter: null,
      };

    //! LOGOUT
    case LOGOUT_ACCESS:
      return {
        stateForm: [],
        aux: [],
        auxExtra: [],
        auxUser: [],
        procedures: [],
        area: [],
        equipment: [],
        userApi: [],
        user: [],
        credential: [],
        form: [],
        errors: null,
        success: null,
        filter: null,
      };

    //! ERROR
    case ERROR:
      return {
        ...state,
        errors: payload,
        filter: null,
        success: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
