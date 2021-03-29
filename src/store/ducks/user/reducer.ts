import { User } from "./contracts/state";
import produce, { Draft } from "immer";
import { UserActions, UserActionTypes } from "./contracts/actionTypes";
import { LoadingStatus } from "../../types";
import {
  ProfileActionTypes,
  ProfileActions,
} from "../profile/contracts/actionTypes";

export interface UserState {
  data: User | null;
  fetchGetMeLoadingStatus: LoadingStatus;
  fetchCreateProfileLoadingStatus: LoadingStatus;
  fetchCreateProfileError: string;
  fetchDeleteProfileLoadingStatus: LoadingStatus;
  fetchEditProfileLoadingStatus: LoadingStatus;
  fetchEditProfileError: string;
  fetchGetNewProfilesChunkLoadingStatus: LoadingStatus;
}

const initialState: UserState = {
  data: null,
  fetchGetMeLoadingStatus: LoadingStatus.NEVER,
  fetchCreateProfileLoadingStatus: LoadingStatus.NEVER,
  fetchCreateProfileError: "",
  fetchDeleteProfileLoadingStatus: LoadingStatus.NEVER,
  fetchEditProfileLoadingStatus: LoadingStatus.NEVER,
  fetchEditProfileError: "",
  fetchGetNewProfilesChunkLoadingStatus: LoadingStatus.NEVER,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: UserActions | ProfileActions) => {
    switch (action.type) {
      case UserActionTypes.SET_USER_DATA:
        draft.data = action.payload;
        break;
      case UserActionTypes.SET_FETCH_GET_ME_LOADING_STATUS:
        draft.fetchGetMeLoadingStatus = action.payload;
        break;
      case ProfileActionTypes.SET_PROFILE:
        if (draft.data) {
          draft.data.profiles.unshift(action.payload);
          draft.data.profilesCount += 1;
        }
        break;
      case ProfileActionTypes.SET_FETCH_CREATE_PROFILE_LOADING_STATUS:
        draft.fetchCreateProfileLoadingStatus = action.payload;
        break;
      case ProfileActionTypes.SET_FETCH_CREATE_PROFILE_ERROR:
        draft.fetchCreateProfileError = action.payload;
        break;
      case ProfileActionTypes.DELETE_PROFILE:
        if (draft.data) {
          draft.data.profiles = draft.data.profiles.filter(
            (pr) => pr._id !== action.payload.profileId
          );
        }
        break;
      case ProfileActionTypes.EDIT_PROFILE:
        if (draft.data?._id === action.payload.owner) {
          draft.data.profiles = draft.data.profiles.map((profile) => {
            if (profile._id === action.payload._id) {
              return action.payload;
            }
            return profile;
          });
        }
        break;
      case ProfileActionTypes.SET_FETCH_DELETE_PROFILE_LOADING_STATUS:
        draft.fetchDeleteProfileLoadingStatus = action.payload;
        break;
      case ProfileActionTypes.SET_FETCH_EDIT_PROFILE_LOADING_STATUS:
        draft.fetchEditProfileLoadingStatus = action.payload;
        break;
      case ProfileActionTypes.SET_FETCH_EDIT_PROFILE_ERROR:
        draft.fetchEditProfileError = action.payload;
        break;
      case ProfileActionTypes.SET_NEW_PROFILES_CHUNK:
        if (draft.data?._id === action.payload.userId) {
          draft.data.profiles = action.payload.profiles;
        }
        break;
      case ProfileActionTypes.SET_FETCH_GET_NEW_PROFILES_CHUNK_LOADING_STATUS:
        draft.fetchGetNewProfilesChunkLoadingStatus = action.payload;
        break;
      default:
        break;
    }
  },
  initialState
);
