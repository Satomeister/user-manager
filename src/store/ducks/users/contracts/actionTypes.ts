import { User } from "../../user/contracts/state";
import { LoadingStatus } from "../../../types";
import { FetchEditUserPayload } from "./state";

export enum UsersActionTypes {
  FETCH_GET_USERS = "users/FETCH_GET_USERS",
  SET_USERS = "users/SET_USERS",
  SET_FETCH_GET_USERS_LOADING_STATUS = "users/SET_FETCH_GET_USERS_LOADING_STATUS",
  FETCH_GET_SELECTED_USER = "users/FETCH_GET_SELECTED_USER",
  SET_SELECTED_USER = "users/SET_SELECTED_USER",
  SET_FETCH_GET_SELECTED_USER_LOADING_STATUS = "users/SET_FETCH_GET_SELECTED_USER_LOADING_STATUS",
  FETCH_EDIT_USER = "users/FETCH_EDIT_USER",
  EDIT_USER = "users/EDIT_USER",
  SET_FETCH_EDIT_USER_LOADING_STATUS = "users/SET_FETCH_EDIT_USER_LOADING_STATUS",
  SET_FETCH_EDIT_USER_ERROR = "users/SET_FETCH_EDIT_USER_ERROR",
  FETCH_DELETE_USER = "users/FETCH_DELETE_USER",
  SET_FETCH_DELETE_USER_LOADING_STATUS = "users/SET_FETCH_DELETE_USER_LOADING_STATUS",
  DELETE_USER = "users/DELETE_USER",
  FETCH_GET_TOTAL_USERS_COUNT = "users/FETCH_GET_TOTAL_USERS_COUNT",
  SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT",
}

export interface FetchGetUsersAction {
  type: UsersActionTypes.FETCH_GET_USERS;
  payload: number;
}

export interface SetUsersAction {
  type: UsersActionTypes.SET_USERS;
  payload: User[];
}

export interface SetFetchGetUsersLoadingStatusAction {
  type: UsersActionTypes.SET_FETCH_GET_USERS_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface FetchGetSelectedUserAction {
  type: UsersActionTypes.FETCH_GET_SELECTED_USER;
  payload: string;
}

export interface SetSelectedUserAction {
  type: UsersActionTypes.SET_SELECTED_USER;
  payload: User;
}

export interface SetFetchGetSelectedUserLoadingStatus {
  type: UsersActionTypes.SET_FETCH_GET_SELECTED_USER_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface FetchEditUserAction {
  type: UsersActionTypes.FETCH_EDIT_USER;
  payload: FetchEditUserPayload;
}

export interface EditUserAction {
  type: UsersActionTypes.EDIT_USER;
  payload: User;
}

export interface SetFetchEditUserLoadingStatusAction {
  type: UsersActionTypes.SET_FETCH_EDIT_USER_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface SetFetchEditUserErrorAction {
  type: UsersActionTypes.SET_FETCH_EDIT_USER_ERROR;
  payload: string;
}

export interface FetchDeleteUserAction {
  type: UsersActionTypes.FETCH_DELETE_USER;
  payload: string;
}

export interface SetFetchDeleteUserLoadingStatusAction {
  type: UsersActionTypes.SET_FETCH_DELETE_USER_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface DeleteUserAction {
  type: UsersActionTypes.DELETE_USER;
  payload: string;
}

export interface FetchGetTotalUsersCountAction {
  type: UsersActionTypes.FETCH_GET_TOTAL_USERS_COUNT;
}

export interface SetTotalUsersCountAction {
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT;
  payload: number;
}

export type UsersActions =
  | FetchGetUsersAction
  | SetUsersAction
  | SetFetchGetUsersLoadingStatusAction
  | FetchGetSelectedUserAction
  | SetSelectedUserAction
  | SetFetchGetSelectedUserLoadingStatus
  | FetchEditUserAction
  | EditUserAction
  | SetFetchEditUserLoadingStatusAction
  | SetFetchEditUserErrorAction
  | FetchDeleteUserAction
  | SetFetchDeleteUserLoadingStatusAction
  | DeleteUserAction
  | FetchGetTotalUsersCountAction
  | SetTotalUsersCountAction;
