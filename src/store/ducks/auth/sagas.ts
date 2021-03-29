import { call, put, takeLatest } from "redux-saga/effects";

import {
  AuthActionTypes,
  FetchLoginAction,
  FetchSignupAction,
} from "./contracts/actionTypes";
import {
  setFetchLoginError,
  setFetchLoginLoadingStatus,
  setFetchLogoutLoadingStatus,
  setFetchSignupError,
  setFetchSignupLoadingStatus,
} from "./actionCreators";
import { LoadingStatus } from "../../types";
import { AuthApi } from "../../../api/auth";
import { setUserData } from "../user/actionCreators";
import {Action} from "redux";

export function* fetchRefreshToken(action: Action) {
  try {
    const { data } = yield AuthApi.refresh()
    localStorage.setItem("token", data);
    yield put(action);
  } catch (error) {
    localStorage.removeItem("token");
    yield put(setUserData(null));
  }
}

function* fetchSignupRequest({ payload }: FetchSignupAction) {
  try {
    yield put(setFetchSignupLoadingStatus(LoadingStatus.LOADING));
    yield put(setFetchSignupError(""));
    const { data } = yield call(AuthApi.signup, payload);
    localStorage.setItem("token", data.token);
    yield put(setUserData(data.user));
    yield put(setFetchSignupLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 400) {
      yield put(setFetchSignupError(error.response.data.message));
    }
    yield put(setFetchSignupLoadingStatus(LoadingStatus.ERROR));
  }
}

function* fetchLoginRequest({ payload }: FetchLoginAction) {
  try {
    yield put(setFetchLoginLoadingStatus(LoadingStatus.LOADING));
    yield put(setFetchLoginError(""));
    const { data } = yield call(AuthApi.login, payload);
    localStorage.setItem("token", data.token);
    yield put(setUserData(data.user));
    yield put(setFetchLoginLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 400) {
      yield put(setFetchLoginError(error.response.data.message));
    }
    yield put(setFetchLoginLoadingStatus(LoadingStatus.ERROR));
  }
}

function* fetchLogoutRequest() {
  try {
    yield put(setFetchLogoutLoadingStatus(LoadingStatus.LOADING));
    yield call(AuthApi.logout);
    localStorage.removeItem("token");
    yield put(setUserData(null));
    yield put(setFetchLogoutLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setFetchLogoutLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* authSaga() {
  yield takeLatest(AuthActionTypes.FETCH_SIGNUP, fetchSignupRequest);
  yield takeLatest(AuthActionTypes.FETCH_LOGIN, fetchLoginRequest);
  yield takeLatest(AuthActionTypes.FETCH_LOGOUT, fetchLogoutRequest);
}
