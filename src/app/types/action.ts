import { User } from "./user";
import { AxiosResponse } from "axios";

export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_UNAUTHENTICATED = "SET_UNAUTHENTICATED";
export const SET_SESSION = "SET_SESSION";

interface SetAuthenticateAction {
  type: typeof SET_AUTHENTICATED;
  res: AxiosResponse;
}

interface SetUnauthenticateAction {
  type: typeof SET_UNAUTHENTICATED;
  res: AxiosResponse;
}

interface SetSessionAction {
  type: typeof SET_SESSION;
  payload: boolean;
}
export type UserActionTypes =
  | SetAuthenticateAction
  | SetUnauthenticateAction
  | SetSessionAction;

export type AppActions = UserActionTypes;
