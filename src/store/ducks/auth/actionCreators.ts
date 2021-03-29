import { FetchLoginPayload, FetchSignupPayload } from "./contracts/state";
import {
  AuthActionTypes,
  FetchLoginAction,
  FetchLogoutAction,
  FetchSignupAction,
  SetFetchLoginErrorAction,
  SetFetchLoginLoadingStatusAction,
  SetFetchLogoutLoadingStatusAction,
  SetFetchSignupErrorAction,
  SetFetchSignupLoadingStatusAction,
} from "./contracts/actionTypes";
import { LoadingStatus } from "../../types";

export const fetchLogin = (payload: FetchLoginPayload): FetchLoginAction => ({
  type: AuthActionTypes.FETCH_LOGIN,
  payload,
});

export const setFetchLoginLoadingStatus = (
  payload: LoadingStatus
): SetFetchLoginLoadingStatusAction => ({
  type: AuthActionTypes.SET_FETCH_LOGIN_LOADING_STATUS,
  payload,
});

export const setFetchLoginError = (
  payload: string
): SetFetchLoginErrorAction => ({
  type: AuthActionTypes.SET_FETCH_LOGIN_ERROR,
  payload,
});

export const fetchSignup = (
  payload: FetchSignupPayload
): FetchSignupAction => ({
  type: AuthActionTypes.FETCH_SIGNUP,
  payload,
});

export const setFetchSignupLoadingStatus = (
  payload: LoadingStatus
): SetFetchSignupLoadingStatusAction => ({
  type: AuthActionTypes.SET_FETCH_SIGNUP_LOADING_STATUS,
  payload,
});

export const setFetchSignupError = (
  payload: string
): SetFetchSignupErrorAction => ({
  type: AuthActionTypes.SET_FETCH_SIGNUP_ERROR,
  payload,
});

export const fetchLogout = (): FetchLogoutAction => ({
  type: AuthActionTypes.FETCH_LOGOUT,
});

export const setFetchLogoutLoadingStatus = (
  payload: LoadingStatus
): SetFetchLogoutLoadingStatusAction => ({
  type: AuthActionTypes.SET_FETCH_LOGOUT_LOADING_STATUS,
  payload,
});
