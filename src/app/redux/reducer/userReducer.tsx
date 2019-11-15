import { User } from "../../types/user";
import {
  UserActionTypes,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_SESSION
} from "../../types/action";

const initialState: User = {
  authenticated: false,
  userId: ""
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): User {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        // ...action.res.data
        ...state,
        authenticated: true,
        userId: action.res.data.userId
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_SESSION:
      return { ...state, authenticated: action.payload };

    default:
      return state;
  }
}
