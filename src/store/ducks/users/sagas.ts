import { call, put, takeLatest } from "redux-saga/effects";
import {
  FetchDeleteUserAction,
  FetchEditUserAction,
  FetchGetSelectedUserAction,
  FetchGetUsersAction,
  UsersActionTypes,
} from "./contracts/actionTypes";
import {
  deleteUser,
  editUser, fetchDeleteUser, fetchEditUser, fetchGetSelectedUser, fetchGetTotalUsersCount, fetchGetUsers,
  setFetchDeleteUserLoadingStatus,
  setFetchEditUserError,
  setFetchEditUserLoadingStatus,
  setFetchGetSelectedUserLoadingStatus,
  setFetchGetUsersLoadingStatus,
  setSelectedUser,
  setTotalUsersCount,
  setUsers,
} from "./actionCreators";
import { LoadingStatus } from "../../types";
import { UsersApi } from "../../../api/users";
import {fetchRefreshToken} from "../auth/sagas";

function* fetchGetUsersRequest({ payload }: FetchGetUsersAction) {
  try {
    yield put(setFetchGetUsersLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(UsersApi.getAll, payload);
    yield put(setUsers(data));
    yield put(setFetchGetUsersLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 401) {
      yield fetchRefreshToken(fetchGetUsers(payload))
    }
    yield put(setFetchGetUsersLoadingStatus(LoadingStatus.ERROR));
  }
}

function* fetchGetSelectedUserRequest({ payload }: FetchGetSelectedUserAction) {
  try {
    yield put(setFetchGetSelectedUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(UsersApi.getById, payload);
    yield put(setSelectedUser(data));
    yield put(setFetchGetSelectedUserLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 401) {
      yield fetchRefreshToken(fetchGetSelectedUser(payload))
    }
    yield put(setFetchGetSelectedUserLoadingStatus(LoadingStatus.ERROR));
  }
}

function* fetchEditUserRequest({ payload }: FetchEditUserAction) {
  try {
    yield put(setFetchEditUserError(""));
    yield put(setFetchEditUserLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(UsersApi.edit, payload);
    yield put(editUser(data));
    yield put(setFetchEditUserLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 400) {
      yield put(setFetchEditUserError(error.response.data.message));
    }
    if (error.response?.status === 401) {
      yield fetchRefreshToken(fetchEditUser(payload))
    }
    yield put(setFetchEditUserLoadingStatus(LoadingStatus.ERROR));
  }
}

function* fetchDeleteUserRequest({ payload }: FetchDeleteUserAction) {
  try {
    yield put(setFetchDeleteUserLoadingStatus(LoadingStatus.LOADING));
    yield call(UsersApi.delete, payload);
    yield put(deleteUser(payload));
    yield put(setFetchDeleteUserLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 401) {
      yield fetchRefreshToken(fetchDeleteUser(payload))
    }
    yield put(setFetchDeleteUserLoadingStatus(LoadingStatus.ERROR));
  }
}

function* fetchGetTotalUsersCountRequest() {
  try {
    const { data } = yield call(UsersApi.getTotalUsersCount);
    yield put(setTotalUsersCount(data));
  } catch (error) {
    if (error.response?.status === 401) {
      yield fetchRefreshToken(fetchGetTotalUsersCount())
    }
  }
}

export function* usersSaga() {
  yield takeLatest(UsersActionTypes.FETCH_GET_USERS, fetchGetUsersRequest);
  yield takeLatest(
    UsersActionTypes.FETCH_GET_SELECTED_USER,
    fetchGetSelectedUserRequest
  );
  yield takeLatest(UsersActionTypes.FETCH_DELETE_USER, fetchDeleteUserRequest);
  yield takeLatest(UsersActionTypes.FETCH_EDIT_USER, fetchEditUserRequest);
  yield takeLatest(
    UsersActionTypes.FETCH_GET_TOTAL_USERS_COUNT,
    fetchGetTotalUsersCountRequest
  );
}
