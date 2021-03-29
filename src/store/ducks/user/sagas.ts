import { call, put, takeLatest } from "redux-saga/effects";

import { LoadingStatus } from "../../types";
import { setFetchGetMeLoadingStatus, setUserData } from "./actionCreators";
import { UsersApi } from "../../../api/users";
import { UserActionTypes } from "./contracts/actionTypes";

function* fetchGetMeRequest() {
  try {
    yield put(setFetchGetMeLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(UsersApi.getMe);
    yield put(setUserData(data));
    yield put(setFetchGetMeLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    yield put(setFetchGetMeLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* profileSaga() {
  yield takeLatest(UserActionTypes.FETCH_GET_ME, fetchGetMeRequest);
}
