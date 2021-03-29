import React from "react";
import produce, { Draft } from "immer";
import { ModalsTypes } from "./contracts/state";
import { ModalsActions, ModalsActionTypes } from "./contracts/actionTypes";

export const ModalsContext = React.createContext<any>({});

export interface ModalsState {
  modalType: ModalsTypes | null;
  state: any;
}

const initialState = {
  modalType: null,
  state: null,
};

export const modalsReducer = produce(
  (draft: Draft<ModalsState>, action: ModalsActions) => {
    switch (action.type) {
      case ModalsActionTypes.OPEN_CREATE_PROFILE_MODAL:
        draft.modalType = ModalsTypes.CREATE_PROFILE;
        break;
      case ModalsActionTypes.OPEN_EDIT_PROFILE_MODAL:
        draft.modalType = ModalsTypes.EDIT_PROFILE;
        draft.state = action.payload;
        break;
      case ModalsActionTypes.OPEN_EDIT_USER_MODAL:
        draft.modalType = ModalsTypes.EDIT_USER;
        draft.state = action.payload;
        break;
      case ModalsActionTypes.CLOSE_MODAL:
        draft.modalType = null;
        draft.state = null;
        break;
      default:
        break;
    }
  },
  initialState
);
