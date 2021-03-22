import { FetchLoginPayload, FetchSignupPayload } from "./state";
import { LoadingStatus } from "../../../types";

export enum AuthActionTypes {
  FETCH_LOGIN = "auth/FETCH_LOGIN",
  SET_FETCH_LOGIN_LOADING_STATUS = "auth/SET_FETCH_LOGIN_LOADING_STATUS",
  SET_FETCH_LOGIN_ERROR = "auth/SET_FETCH_LOGIN_ERROR",
  FETCH_SIGNUP = "auth/FETCH_SIGNUP",
  SET_FETCH_SIGNUP_LOADING_STATUS = "auth/SET_FETCH_SIGNUP_LOADING_STATUS",
  SET_FETCH_SIGNUP_ERROR = "auth/SET_FETCH_SIGNUP_ERROR",
  FETCH_LOGOUT = "auth/FETCH_LOGOUT",
  SET_FETCH_LOGOUT_LOADING_STATUS = "auth/SET_FETCH_LOGOUT_LOADING_STATUS",
}

export interface FetchLoginAction {
  type: AuthActionTypes.FETCH_LOGIN;
  payload: FetchLoginPayload;
}

export interface SetFetchLoginLoadingStatusAction {
  type: AuthActionTypes.SET_FETCH_LOGIN_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface SetFetchLoginErrorAction {
  type: AuthActionTypes.SET_FETCH_LOGIN_ERROR;
  payload: string;
}

export interface FetchSignupAction {
  type: AuthActionTypes.FETCH_SIGNUP;
  payload: FetchSignupPayload;
}

export interface SetFetchSignupLoadingStatusAction {
  type: AuthActionTypes.SET_FETCH_SIGNUP_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface SetFetchSignupErrorAction {
  type: AuthActionTypes.SET_FETCH_SIGNUP_ERROR;
  payload: string;
}

export interface FetchLogoutAction {
  type: AuthActionTypes.FETCH_LOGOUT;
}

export interface SetFetchLogoutLoadingStatusAction {
  type: AuthActionTypes.SET_FETCH_LOGOUT_LOADING_STATUS;
  payload: LoadingStatus;
}

export type AuthActions =
  | FetchLoginAction
  | SetFetchLoginLoadingStatusAction
  | SetFetchLoginErrorAction
  | FetchSignupAction
  | SetFetchSignupLoadingStatusAction
  | SetFetchSignupErrorAction
  | FetchLogoutAction
  | SetFetchLogoutLoadingStatusAction;
