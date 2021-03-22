import { AppState } from "../../rootReducer";
import { LoadingStatus } from "../../types";

export const selectFetchLoginLoadingStatus = (state: AppState): LoadingStatus =>
  state.auth.fetchLoginLoadingStatus;
export const selectFetchLoginError = (state: AppState): string =>
  state.auth.fetchLoginError;
export const selectFetchSignupLoadingStatus = (
  state: AppState
): LoadingStatus => state.auth.fetchSignupLoadingStatus;
export const selectFetchSignupError = (state: AppState): string =>
  state.auth.fetchSignupError;
export const selectLogoutLoadingStatus = (state: AppState): LoadingStatus =>
  state.auth.fetchLogoutLoadingStatus;
