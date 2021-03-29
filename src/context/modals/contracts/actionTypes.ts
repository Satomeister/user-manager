import { Profile } from "../../../store/ducks/profile/contracts/state";
import { User } from "../../../store/ducks/user/contracts/state";

export enum ModalsActionTypes {
  OPEN_CREATE_PROFILE_MODAL = "modals/OPEN_CREATE_PROFILE_MODAL",
  OPEN_EDIT_PROFILE_MODAL = "modals/OPEN_EDIT_PROFILE_MODAL",
  OPEN_EDIT_USER_MODAL = "modals/OPEN_EDIT_USER_MODAL",
  CLOSE_MODAL = "modals/CLOSE_MODAL",
}

export interface OpenCreateProfileModalAction {
  type: ModalsActionTypes.OPEN_CREATE_PROFILE_MODAL;
}

export interface OpenEditProfileModalAction {
  type: ModalsActionTypes.OPEN_EDIT_PROFILE_MODAL;
  payload: Profile;
}

export interface OpenEditUserModalAction {
  type: ModalsActionTypes.OPEN_EDIT_USER_MODAL;
  payload: User;
}

export interface CloseModalAction {
  type: ModalsActionTypes.CLOSE_MODAL;
}

export type ModalsActions =
  | OpenCreateProfileModalAction
  | OpenEditProfileModalAction
  | OpenEditUserModalAction
  | CloseModalAction;
