import produce, { Draft } from "immer";
import { AuthActions, AuthActionTypes } from "./contracts/actionTypes";
import { LoadingStatus } from "../../types";

export interface AuthState {
  fetchLoginLoadingStatus: LoadingStatus;
  fetchLoginError: string;
  fetchSignupLoadingStatus: LoadingStatus;
  fetchSignupError: string;
  fetchLogoutLoadingStatus: LoadingStatus;
}

const initialState: AuthState = {
  fetchLoginLoadingStatus: LoadingStatus.NEVER,
  fetchLoginError: "",
  fetchSignupLoadingStatus: LoadingStatus.NEVER,
  fetchSignupError: "",
  fetchLogoutLoadingStatus: LoadingStatus.NEVER,
};

export const authReducer = produce(
  (draft: Draft<AuthState>, action: AuthActions) => {
    switch (action.type) {
      case AuthActionTypes.SET_FETCH_LOGIN_LOADING_STATUS:
        draft.fetchLoginLoadingStatus = action.payload;
        break;
      case AuthActionTypes.SET_FETCH_LOGIN_ERROR:
        draft.fetchLoginError = action.payload;
        break;
      case AuthActionTypes.SET_FETCH_SIGNUP_LOADING_STATUS:
        draft.fetchSignupLoadingStatus = action.payload;
        break;
      case AuthActionTypes.SET_FETCH_SIGNUP_ERROR:
        draft.fetchSignupError = action.payload;
        break;
      case AuthActionTypes.SET_FETCH_LOGOUT_LOADING_STATUS:
        draft.fetchLogoutLoadingStatus = action.payload;
        break;
      default:
        break;
    }
  },
  initialState
);
