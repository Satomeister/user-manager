import { call, put, takeLatest } from "redux-saga/effects";

import { LoadingStatus } from "../../types";
import { setFetchGetMeLoadingStatus, SetUserData } from "./actionCreators";
import { UserApi } from "../../../api/user";
import { UserActionTypes } from "./contracts/actionTypes";

function* fetchGetMeRequest() {
  try {
    yield put(setFetchGetMeLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(UserApi.getMe);
    yield put(SetUserData(data));
    yield put(setFetchGetMeLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setFetchGetMeLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionTypes.FETCH_GET_ME, fetchGetMeRequest);
}
