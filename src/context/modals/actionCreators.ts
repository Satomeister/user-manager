import {
  CloseModalAction,
  ModalsActionTypes,
  OpenCreateProfileModalAction,
  OpenEditProfileModalAction,
  OpenEditUserModalAction,
} from "./contracts/actionTypes";
import { User } from "../../store/ducks/user/contracts/state";
import { Profile } from "../../store/ducks/profile/contracts/state";

export const openCreateProfileModal = (): OpenCreateProfileModalAction => ({
  type: ModalsActionTypes.OPEN_CREATE_PROFILE_MODAL,
});

export const openEditProfileModal = (
  payload: Profile
): OpenEditProfileModalAction => ({
  type: ModalsActionTypes.OPEN_EDIT_PROFILE_MODAL,
  payload,
});

export const openEditUserModal = (payload: User): OpenEditUserModalAction => ({
  type: ModalsActionTypes.OPEN_EDIT_USER_MODAL,
  payload,
});

export const closeModal = (): CloseModalAction => ({
  type: ModalsActionTypes.CLOSE_MODAL,
});
