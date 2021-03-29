import {
  FetchCreateProfilePayload,
  FetchDeleteProfilePayload,
  FetchEditProfilePayload,
  FetchGetNewProfilesChunkPayload,
  Profile,
  SetNewProfilesChunkPayload,
} from "./contracts/state";
import { LoadingStatus } from "../../types";
import {
  DeleteProfileAction,
  EditProfileAction,
  FetchCreateProfileAction,
  FetchDeleteProfileAction,
  FetchEditProfileAction,
  FetchGetNewProfilesChunkAction,
  ProfileActionTypes,
  SetFetchCreateProfileErrorAction,
  SetFetchCreateProfileLoadingStatusAction,
  SetFetchDeleteProfileLoadingStatus,
  SetFetchEditProfileError,
  SetFetchEditProfileLoadingStatus,
  SetFetchGetNewProfilesChunkLoadingStatusAction,
  SetNewProfilesChunkAction,
  SetProfileAction,
} from "./contracts/actionTypes";

export const fetchCreateProfile = (
  payload: FetchCreateProfilePayload
): FetchCreateProfileAction => ({
  type: ProfileActionTypes.FETCH_CREATE_PROFILE,
  payload,
});

export const setProfile = (payload: Profile): SetProfileAction => ({
  type: ProfileActionTypes.SET_PROFILE,
  payload,
});

export const setFetchCreateProfileLoadingStatus = (
  payload: LoadingStatus
): SetFetchCreateProfileLoadingStatusAction => ({
  type: ProfileActionTypes.SET_FETCH_CREATE_PROFILE_LOADING_STATUS,
  payload,
});

export const setFetchCreateProfileError = (
  payload: string
): SetFetchCreateProfileErrorAction => ({
  type: ProfileActionTypes.SET_FETCH_CREATE_PROFILE_ERROR,
  payload,
});

export const fetchDeleteProfile = (
  payload: FetchDeleteProfilePayload
): FetchDeleteProfileAction => ({
  type: ProfileActionTypes.FETCH_DELETE_PROFILE,
  payload,
});

export const deleteProfile = (
  payload: FetchDeleteProfilePayload
): DeleteProfileAction => ({
  type: ProfileActionTypes.DELETE_PROFILE,
  payload,
});

export const setFetchDeleteProfileLoadingStatus = (
  payload: LoadingStatus
): SetFetchDeleteProfileLoadingStatus => ({
  type: ProfileActionTypes.SET_FETCH_DELETE_PROFILE_LOADING_STATUS,
  payload,
});

export const fetchEditProfile = (
  payload: FetchEditProfilePayload
): FetchEditProfileAction => ({
  type: ProfileActionTypes.FETCH_EDIT_PROFILE,
  payload,
});

export const editProfile = (payload: Profile): EditProfileAction => ({
  type: ProfileActionTypes.EDIT_PROFILE,
  payload,
});

export const setFetchEditProfileLoadingStatus = (
  payload: LoadingStatus
): SetFetchEditProfileLoadingStatus => ({
  type: ProfileActionTypes.SET_FETCH_EDIT_PROFILE_LOADING_STATUS,
  payload,
});

export const setFetchEditProfileError = (
  payload: string
): SetFetchEditProfileError => ({
  type: ProfileActionTypes.SET_FETCH_EDIT_PROFILE_ERROR,
  payload,
});

export const fetchGetNewProfilesChunk = (
  payload: FetchGetNewProfilesChunkPayload
): FetchGetNewProfilesChunkAction => ({
  type: ProfileActionTypes.FETCH_GET_NEW_PROFILES_CHUNK,
  payload,
});

export const setNewProfilesChunk = (
  payload: SetNewProfilesChunkPayload
): SetNewProfilesChunkAction => ({
  type: ProfileActionTypes.SET_NEW_PROFILES_CHUNK,
  payload,
});

export const setFetchGetNewProfilesChunkLoadingStatus = (
  payload: LoadingStatus
): SetFetchGetNewProfilesChunkLoadingStatusAction => ({
  type: ProfileActionTypes.SET_FETCH_GET_NEW_PROFILES_CHUNK_LOADING_STATUS,
  payload,
});
