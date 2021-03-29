import produce, { Draft } from "immer";
import { UsersActions, UsersActionTypes } from "./contracts/actionTypes";
import { User } from "../user/contracts/state";
import { LoadingStatus } from "../../types";
import {
  ProfileActions,
  ProfileActionTypes,
} from "../profile/contracts/actionTypes";

export interface UsersState {
  users: User[];
  totalCount: number;
  selectedUser: User | null;
  fetchGetUsersLoadingStatus: LoadingStatus;
  fetchDeleteUserLoadingStatus: LoadingStatus;
  fetchEditUserLoadingStatus: LoadingStatus;
  fetchEditUserError: string;
  fetchGetSelectedUserLoadingStatus: LoadingStatus;
}

const initialState: UsersState = {
  users: [],
  totalCount: 0,
  selectedUser: null,
  fetchGetUsersLoadingStatus: LoadingStatus.NEVER,
  fetchDeleteUserLoadingStatus: LoadingStatus.NEVER,
  fetchEditUserLoadingStatus: LoadingStatus.NEVER,
  fetchEditUserError: "",
  fetchGetSelectedUserLoadingStatus: LoadingStatus.NEVER,
};

export const usersReducer = produce(
  (draft: Draft<UsersState>, action: UsersActions | ProfileActions) => {
    switch (action.type) {
      case UsersActionTypes.SET_USERS:
        draft.users = action.payload;
        break;
      case UsersActionTypes.SET_FETCH_GET_USERS_LOADING_STATUS:
        draft.fetchGetUsersLoadingStatus = action.payload;
        break;
      case UsersActionTypes.SET_SELECTED_USER:
        draft.selectedUser = action.payload;
        break;
      case UsersActionTypes.SET_FETCH_GET_SELECTED_USER_LOADING_STATUS:
        draft.fetchGetSelectedUserLoadingStatus = action.payload;
        break;
      case UsersActionTypes.EDIT_USER:
        draft.users = draft.users.map((user) => {
          if (user._id === action.payload._id) {
            return action.payload;
          }
          return user;
        });
        if (draft.selectedUser?._id === action.payload._id) {
          draft.selectedUser = action.payload;
        }
        break;
      case UsersActionTypes.SET_FETCH_EDIT_USER_LOADING_STATUS:
        draft.fetchEditUserLoadingStatus = action.payload;
        break;
      case UsersActionTypes.SET_FETCH_EDIT_USER_ERROR:
        draft.fetchEditUserError = action.payload;
        break;
      case UsersActionTypes.DELETE_USER:
        draft.users = draft.users.filter((u) => u._id !== action.payload);
        break;
      case UsersActionTypes.SET_FETCH_DELETE_USER_LOADING_STATUS:
        draft.fetchDeleteUserLoadingStatus = action.payload;
        break;
      case UsersActionTypes.SET_TOTAL_USERS_COUNT:
        draft.totalCount = action.payload;
        break;
      case ProfileActionTypes.EDIT_PROFILE:
        if (
          draft.selectedUser &&
          draft.selectedUser?._id === action.payload.owner
        ) {
          draft.selectedUser.profiles = draft.selectedUser.profiles.map(
            (profile) => {
              if (profile._id === action.payload._id) {
                return action.payload;
              }
              return profile;
            }
          );
        }
        break;
      case ProfileActionTypes.SET_NEW_PROFILES_CHUNK:
        if (
          draft.selectedUser &&
          draft.selectedUser._id === action.payload.userId
        ) {
          draft.selectedUser.profiles = action.payload.profiles;
        }
        break;
      default:
        break;
    }
  },
  initialState
);
