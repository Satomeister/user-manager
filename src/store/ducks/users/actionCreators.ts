import {
  DeleteUserAction,
  EditUserAction,
  FetchDeleteUserAction,
  FetchEditUserAction,
  FetchGetSelectedUserAction,
  FetchGetTotalUsersCountAction,
  FetchGetUsersAction,
  SetFetchDeleteUserLoadingStatusAction,
  SetFetchEditUserErrorAction,
  SetFetchEditUserLoadingStatusAction,
  SetFetchGetSelectedUserLoadingStatus,
  SetFetchGetUsersLoadingStatusAction,
  SetSelectedUserAction,
  SetTotalUsersCountAction,
  SetUsersAction,
  UsersActionTypes,
} from "./contracts/actionTypes";
import { User } from "../user/contracts/state";
import { LoadingStatus } from "../../types";
import { FetchEditUserPayload } from "./contracts/state";

export const fetchGetUsers = (payload: number): FetchGetUsersAction => ({
  type: UsersActionTypes.FETCH_GET_USERS,
  payload,
});

export const setUsers = (payload: User[]): SetUsersAction => ({
  type: UsersActionTypes.SET_USERS,
  payload,
});

export const setFetchGetUsersLoadingStatus = (
  payload: LoadingStatus
): SetFetchGetUsersLoadingStatusAction => ({
  type: UsersActionTypes.SET_FETCH_GET_USERS_LOADING_STATUS,
  payload,
});

export const fetchGetSelectedUser = (
  payload: string
): FetchGetSelectedUserAction => ({
  type: UsersActionTypes.FETCH_GET_SELECTED_USER,
  payload,
});

export const setSelectedUser = (payload: User): SetSelectedUserAction => ({
  type: UsersActionTypes.SET_SELECTED_USER,
  payload,
});

export const setFetchGetSelectedUserLoadingStatus = (
  payload: LoadingStatus
): SetFetchGetSelectedUserLoadingStatus => ({
  type: UsersActionTypes.SET_FETCH_GET_SELECTED_USER_LOADING_STATUS,
  payload,
});

export const fetchEditUser = (
  payload: FetchEditUserPayload
): FetchEditUserAction => ({
  type: UsersActionTypes.FETCH_EDIT_USER,
  payload,
});

export const editUser = (payload: User): EditUserAction => ({
  type: UsersActionTypes.EDIT_USER,
  payload,
});

export const setFetchEditUserLoadingStatus = (
  payload: LoadingStatus
): SetFetchEditUserLoadingStatusAction => ({
  type: UsersActionTypes.SET_FETCH_EDIT_USER_LOADING_STATUS,
  payload,
});

export const setFetchEditUserError = (
  payload: string
): SetFetchEditUserErrorAction => ({
  type: UsersActionTypes.SET_FETCH_EDIT_USER_ERROR,
  payload,
});

export const fetchDeleteUser = (payload: string): FetchDeleteUserAction => ({
  type: UsersActionTypes.FETCH_DELETE_USER,
  payload,
});

export const deleteUser = (payload: string): DeleteUserAction => ({
  type: UsersActionTypes.DELETE_USER,
  payload,
});

export const setFetchDeleteUserLoadingStatus = (
  payload: LoadingStatus
): SetFetchDeleteUserLoadingStatusAction => ({
  type: UsersActionTypes.SET_FETCH_DELETE_USER_LOADING_STATUS,
  payload,
});

export const fetchGetTotalUsersCount = (): FetchGetTotalUsersCountAction => ({
  type: UsersActionTypes.FETCH_GET_TOTAL_USERS_COUNT,
});

export const setTotalUsersCount = (
  payload: number
): SetTotalUsersCountAction => ({
  type: UsersActionTypes.SET_TOTAL_USERS_COUNT,
  payload,
});
