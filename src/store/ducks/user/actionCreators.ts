import { User } from "./contracts/state";
import {
  FetchGetMeAction,
  SetFetchGetMeLoadingStatusAction,
  SetUserDataAction,
  UserActionTypes,
} from "./contracts/actionTypes";
import { LoadingStatus } from "../../types";

export const setUserData = (payload: User | null): SetUserDataAction => ({
  type: UserActionTypes.SET_USER_DATA,
  payload,
});

export const fetchGetMe = (): FetchGetMeAction => ({
  type: UserActionTypes.FETCH_GET_ME,
});

export const setFetchGetMeLoadingStatus = (
  payload: LoadingStatus
): SetFetchGetMeLoadingStatusAction => ({
  type: UserActionTypes.SET_FETCH_GET_ME_LOADING_STATUS,
  payload,
});
