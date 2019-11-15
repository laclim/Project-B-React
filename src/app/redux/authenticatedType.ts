export const SET_AUTHENTICATED = "SET_AUTHENTICATED";
export const SET_UNAUTHENTICATED = "SET_UNAUTHENTICATED";

interface SetAuthenticateAction {
  type: typeof SET_AUTHENTICATED;
  payload: any;
}

interface SetUnauthenticateAction {
  type: typeof SET_UNAUTHENTICATED;
  payload: any;
}
export type AuthenticationAction =
  | SetAuthenticateAction
  | SetUnauthenticateAction;
