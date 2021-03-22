import { AppState } from "../../rootReducer";
import { User } from "./contracts/state";
import { LoadingStatus } from "../../types";

export const selectUser = (state: AppState): User | null => state.user.data;
export const selectFetchGetMeLoadingStatus = (state: AppState): LoadingStatus =>
  state.user.fetchGetMeLoadingStatus;
export const selectIsAuth = (state: AppState): boolean => !!state.user.data;
