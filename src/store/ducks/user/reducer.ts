import { User } from "./contracts/state";
import produce, { Draft } from "immer";
import { UserActions, UserActionTypes } from "./contracts/actionTypes";
import { LoadingStatus } from "../../types";

export interface UserState {
  data: User | null;
  fetchGetMeLoadingStatus: LoadingStatus;
}

const initialState: UserState = {
  data: null,
  fetchGetMeLoadingStatus: LoadingStatus.NEVER,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
      case UserActionTypes.SET_USER_DATA:
        draft.data = action.payload;
        break;
      case UserActionTypes.SET_FETCH_GET_ME_LOADING_STATUS:
        draft.fetchGetMeLoadingStatus = action.payload;
        break;
    }
  },
  initialState
);
