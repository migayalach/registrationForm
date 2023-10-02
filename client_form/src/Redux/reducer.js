import {
  ADD_STATE,
  GET_STATE,
  GET_STATE_ID,
  UPDATE_STATE,
  DELETE_STATE,
} from "./actions-type";

const initialState = {
  stateForm: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_STATE:
      try {
      } catch (error) {}

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

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
