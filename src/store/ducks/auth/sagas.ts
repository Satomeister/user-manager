import { call, put, takeLatest } from "redux-saga/effects";

import { AuthActionTypes, FetchLoginAction } from "./contracts/actionTypes";
import {
  setFetchLoginError,
  setFetchLoginLoadingStatus,
  setFetchSignupError,
  setFetchSignupLoadingStatus,
} from "./actionCreators";
import { LoadingStatus } from "../../types";
import { AuthApi } from "../../../api/auth";
import { SetUserData } from "../user/actionCreators";

function* fetchSignupRequest({ payload }: FetchLoginAction) {
  try {
    yield put(setFetchSignupLoadingStatus(LoadingStatus.LOADING));
    yield put(setFetchSignupError(""));
    const { data } = yield call(AuthApi.signup, payload);
    localStorage.setItem("token", data.token);
    yield put(SetUserData(data.user));
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
    yield put(SetUserData(data.user));
    yield put(setFetchLoginLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 400) {
      yield put(setFetchLoginError(error.response.data.message));
    }
    yield put(setFetchLoginLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* authSaga() {
  yield takeLatest(AuthActionTypes.FETCH_SIGNUP, fetchSignupRequest);
  yield takeLatest(AuthActionTypes.FETCH_LOGIN, fetchLoginRequest);
}
