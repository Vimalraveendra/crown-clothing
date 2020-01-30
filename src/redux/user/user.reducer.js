import userActionTypes from "./user.types.js";
const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    // case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    // case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };

    case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case userActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
