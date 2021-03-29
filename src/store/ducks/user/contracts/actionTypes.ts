import { User } from "./state";
import { LoadingStatus } from "../../../types";

export enum UserActionTypes {
  SET_USER_DATA = "user/SET_USER_DATA",
  FETCH_GET_ME = "user/FETCH_GET_ME",
  SET_FETCH_GET_ME_LOADING_STATUS = "user/SET_FETCH_GET_ME_LOADING_STATUS",
}

export interface SetUserDataAction {
  type: UserActionTypes.SET_USER_DATA;
  payload: User | null;
}

export interface FetchGetMeAction {
  type: UserActionTypes.FETCH_GET_ME;
}

export interface SetFetchGetMeLoadingStatusAction {
  type: UserActionTypes.SET_FETCH_GET_ME_LOADING_STATUS;
  payload: LoadingStatus;
}

export type UserActions =
  | SetUserDataAction
  | FetchGetMeAction
  | SetFetchGetMeLoadingStatusAction;
