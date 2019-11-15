import { SET_AUTHENTICATED, AppActions, SET_SESSION } from "../../types/action";
import { Dispatch } from "redux";
import { AppState } from "../store";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";

export const authenticate = (res: AxiosResponse): AppActions => ({
  type: SET_AUTHENTICATED,
  res
});

export const setSession = (payload: boolean): AppActions => ({
  type: SET_SESSION,
  payload
});

// export const unauthenticate = (user: User) => ({
//   type: SET_UNAUTHENTICATED,
//   user
// });

export const startAuthenticate = (res: AxiosResponse) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(authenticate(res));
  };
};

// export const startA = (res: AxiosResponse) => {
//   const dispatch = useDispatch();
//   return dispatch(authenticate(res));
//   // return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//   //   dispatch(authenticate(res));
//   // };
// };

export const startSetSession = (payload: boolean) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    dispatch(setSession(payload));
  };
};
