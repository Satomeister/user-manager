import { LoadingStatus } from "../../../types";
import {
  FetchCreateProfilePayload,
  FetchDeleteProfilePayload,
  FetchEditProfilePayload,
  FetchGetNewProfilesChunkPayload,
  Profile,
  SetNewProfilesChunkPayload,
} from "./state";

export enum ProfileActionTypes {
  FETCH_CREATE_PROFILE = "user/FETCH_CREATE_PROFILE",
  SET_PROFILE = "user/SET_PROFILE",
  SET_FETCH_CREATE_PROFILE_LOADING_STATUS = "user/SET_FETCH_CREATE_PROFILE_LOADING_STATUS",
  SET_FETCH_CREATE_PROFILE_ERROR = "user/SET_FETCH_CREATE_PROFILE_ERROR",
  FETCH_DELETE_PROFILE = "user/FETCH_DELETE_PROFILE",
  DELETE_PROFILE = "user/DELETE_PROFILE",
  SET_FETCH_DELETE_PROFILE_LOADING_STATUS = "user/SET_FETCH_DELETE_PROFILE_LOADING_STATUS",
  FETCH_EDIT_PROFILE = "user/FETCH_EDIT_PROFILE",
  EDIT_PROFILE = "user/EDIT_PROFILE",
  SET_FETCH_EDIT_PROFILE_LOADING_STATUS = "user/SET_FETCH_EDIT_PROFILE_LOADING_STATUS",
  SET_FETCH_EDIT_PROFILE_ERROR = "user/SET_FETCH_EDIT_PROFILE_ERROR",
  FETCH_GET_NEW_PROFILES_CHUNK = "user/FETCH_GET_NEW_CHUNK",
  SET_NEW_PROFILES_CHUNK = "user/SET_NEW_PROFILES_CHUNK",
  SET_FETCH_GET_NEW_PROFILES_CHUNK_LOADING_STATUS = "user/SET_FETCH_GET_NEW_CHUNK_LOADING_STATUS",
}

export interface FetchCreateProfileAction {
  type: ProfileActionTypes.FETCH_CREATE_PROFILE;
  payload: FetchCreateProfilePayload;
}

export interface SetProfileAction {
  type: ProfileActionTypes.SET_PROFILE;
  payload: Profile;
}

export interface SetFetchCreateProfileLoadingStatusAction {
  type: ProfileActionTypes.SET_FETCH_CREATE_PROFILE_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface SetFetchCreateProfileErrorAction {
  type: ProfileActionTypes.SET_FETCH_CREATE_PROFILE_ERROR;
  payload: string;
}

export interface FetchDeleteProfileAction {
  type: ProfileActionTypes.FETCH_DELETE_PROFILE;
  payload: FetchDeleteProfilePayload;
}

export interface DeleteProfileAction {
  type: ProfileActionTypes.DELETE_PROFILE;
  payload: FetchDeleteProfilePayload;
}

export interface SetFetchDeleteProfileLoadingStatus {
  type: ProfileActionTypes.SET_FETCH_DELETE_PROFILE_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface FetchEditProfileAction {
  type: ProfileActionTypes.FETCH_EDIT_PROFILE;
  payload: FetchEditProfilePayload;
}

export interface EditProfileAction {
  type: ProfileActionTypes.EDIT_PROFILE;
  payload: Profile;
}

export interface SetFetchEditProfileLoadingStatus {
  type: ProfileActionTypes.SET_FETCH_EDIT_PROFILE_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface SetFetchEditProfileError {
  type: ProfileActionTypes.SET_FETCH_EDIT_PROFILE_ERROR;
  payload: string;
}

export interface FetchGetNewProfilesChunkAction {
  type: ProfileActionTypes.FETCH_GET_NEW_PROFILES_CHUNK;
  payload: FetchGetNewProfilesChunkPayload;
}

export interface SetNewProfilesChunkAction {
  type: ProfileActionTypes.SET_NEW_PROFILES_CHUNK;
  payload: SetNewProfilesChunkPayload;
}

export interface SetFetchGetNewProfilesChunkLoadingStatusAction {
  type: ProfileActionTypes.SET_FETCH_GET_NEW_PROFILES_CHUNK_LOADING_STATUS;
  payload: LoadingStatus;
}

export type ProfileActions =
  | FetchCreateProfileAction
  | SetProfileAction
  | SetFetchCreateProfileLoadingStatusAction
  | SetFetchCreateProfileErrorAction
  | FetchDeleteProfileAction
  | DeleteProfileAction
  | SetFetchDeleteProfileLoadingStatus
  | FetchEditProfileAction
  | EditProfileAction
  | SetFetchEditProfileLoadingStatus
  | SetFetchEditProfileError
  | FetchGetNewProfilesChunkAction
  | SetNewProfilesChunkAction
  | SetFetchGetNewProfilesChunkLoadingStatusAction;
