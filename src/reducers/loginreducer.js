import * as type from "../actions/actionType.js";

export default function (state = {}, action) {
  switch (action.type) {
    case type.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        error: null,
        username: action.payload,
        authenticated: true,
      };

    default:
      return state;
  }
}
