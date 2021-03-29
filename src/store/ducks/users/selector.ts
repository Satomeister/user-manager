import { User } from "../user/contracts/state";
import { AppState } from "../../rootReducer";
import { LoadingStatus } from "../../types";

export const selectUsers = (state: AppState): User[] => state.users.users;

export const selectFetchGetUsersLoadingStatus = (
  state: AppState
): LoadingStatus => state.users.fetchGetUsersLoadingStatus;

export const selectSelectedUser = (state: AppState): User | null =>
  state.users.selectedUser;

export const selectFetchGetSelectedUserLoadingStatus = (
  state: AppState
): LoadingStatus => state.users.fetchGetSelectedUserLoadingStatus;

export const selectFetchEditUserLoadingStatus = (
  state: AppState
): LoadingStatus => state.users.fetchEditUserLoadingStatus;

export const selectFetchEditUserError = (state: AppState): string =>
  state.users.fetchEditUserError;

export const selectFetchDeleteUserLoadingStatus = (
  state: AppState
): LoadingStatus => state.users.fetchDeleteUserLoadingStatus;

export const selectTotalUsersCount = (state: AppState): number =>
  state.users.totalCount;
