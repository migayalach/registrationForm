import {
  ADD_STATE,
  GET_STATE,
  GET_STATE_ID,
  UPDATE_STATE,
  DELETE_STATE,
  ERROR,
} from "./actions-type";

const initialState = {
  stateForm: [],
  errors: null,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_STATE:
      return {
        ...state,
        stateForm: payload,
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

// try {
// } catch (error) {}

// case GET_STATE:
//   try {
//   } catch (error) {}

// case GET_STATE_ID:
//   try {
//   } catch (error) {}

// case UPDATE_STATE:
//   try {
//   } catch (error) {}

// case DELETE_STATE:
//   try {
//   } catch (error) {}
