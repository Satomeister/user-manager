import { AppState } from "../../rootReducer";
import { User } from "./contracts/state";
import { LoadingStatus } from "../../types";

export const selectUser = (state: AppState): User | null => state.user.data;

export const selectFetchGetMeLoadingStatus = (state: AppState): LoadingStatus =>
  state.user.fetchGetMeLoadingStatus;

export const selectIsAuth = (state: AppState): boolean => !!state.user.data;

export const selectFetchCreateProfileLoadingStatus = (
  state: AppState
): LoadingStatus => state.user.fetchCreateProfileLoadingStatus;

export const selectFetchCreateProfileError = (state: AppState): string =>
  state.user.fetchCreateProfileError;

export const selectFetchEditProfileLoadingStatus = (
  state: AppState
): LoadingStatus => state.user.fetchEditProfileLoadingStatus;

export const selectFetchEditProfileError = (state: AppState): string =>
  state.user.fetchEditProfileError;

export const selectFetchDeleteProfileLoadingStatus = (
  state: AppState
): LoadingStatus => state.user.fetchDeleteProfileLoadingStatus;

export const selectFetchGetNewProfilesChunkLoadingStatus = (
  state: AppState
): LoadingStatus => state.user.fetchGetNewProfilesChunkLoadingStatus;
