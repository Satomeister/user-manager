import { call, put, takeLatest } from "redux-saga/effects";

import { LoadingStatus } from "../../types";
import {
  deleteProfile,
  editProfile,
  fetchCreateProfile,
  fetchDeleteProfile,
  fetchEditProfile,
  fetchGetNewProfilesChunk,
  setFetchCreateProfileError,
  setFetchCreateProfileLoadingStatus,
  setFetchDeleteProfileLoadingStatus,
  setFetchEditProfileError,
  setFetchEditProfileLoadingStatus,
  setFetchGetNewProfilesChunkLoadingStatus,
  setNewProfilesChunk,
  setProfile,
} from "./actionCreators";
import {
  FetchCreateProfileAction,
  FetchDeleteProfileAction,
  FetchEditProfileAction,
  FetchGetNewProfilesChunkAction,
  ProfileActionTypes,
} from "./contracts/actionTypes";
import { ProfileApi } from "../../../api/profile";
import { fetchRefreshToken } from "../auth/sagas";

function* fetchCreateProfileRequest({ payload }: FetchCreateProfileAction) {
  try {
    yield put(setFetchCreateProfileError(""));
    yield put(setFetchCreateProfileLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(ProfileApi.create, payload);
    yield put(setProfile(data));
    yield put(setFetchCreateProfileLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 400) {
      yield put(setFetchCreateProfileError(error.response.data.message));
    }
    if (error.response?.status === 401) {
      yield fetchRefreshToken(fetchCreateProfile(payload));
    }
    yield put(setFetchCreateProfileLoadingStatus(LoadingStatus.ERROR));
  }
}

function* fetchDeleteProfileRequest({ payload }: FetchDeleteProfileAction) {
  try {
    yield put(setFetchDeleteProfileLoadingStatus(LoadingStatus.LOADING));
    yield call(ProfileApi.delete, payload.profileId);
    yield put(deleteProfile(payload));
    yield put(setFetchDeleteProfileLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 401) {
      yield fetchRefreshToken(fetchDeleteProfile(payload));
    }
    yield put(setFetchDeleteProfileLoadingStatus(LoadingStatus.ERROR));
  }
}

function* fetchEditProfileRequest({ payload }: FetchEditProfileAction) {
  try {
    yield put(setFetchEditProfileError(""));
    yield put(setFetchEditProfileLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(ProfileApi.edit, payload);
    yield put(editProfile(data));
    yield put(setFetchEditProfileLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 400) {
      yield put(setFetchEditProfileError(error.response.data.message));
    }
    if (error.response?.status === 401) {
      yield fetchRefreshToken(fetchEditProfile(payload));
    }
    yield put(setFetchEditProfileLoadingStatus(LoadingStatus.ERROR));
  }
}

function* fetchGetNewProfilesChunkRequest({
  payload,
}: FetchGetNewProfilesChunkAction) {
  try {
    yield put(setFetchGetNewProfilesChunkLoadingStatus(LoadingStatus.LOADING));
    const { data } = yield call(ProfileApi.getNewChunk, payload);
    yield put(setNewProfilesChunk({ userId: payload.userId, profiles: data }));
    yield put(setFetchGetNewProfilesChunkLoadingStatus(LoadingStatus.SUCCESS));
  } catch (error) {
    if (error.response?.status === 401) {
      yield fetchRefreshToken(fetchGetNewProfilesChunk(payload));
    }
    yield put(setFetchGetNewProfilesChunkLoadingStatus(LoadingStatus.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(
    ProfileActionTypes.FETCH_CREATE_PROFILE,
    fetchCreateProfileRequest
  );
  yield takeLatest(
    ProfileActionTypes.FETCH_DELETE_PROFILE,
    fetchDeleteProfileRequest
  );
  yield takeLatest(
    ProfileActionTypes.FETCH_EDIT_PROFILE,
    fetchEditProfileRequest
  );
  yield takeLatest(
    ProfileActionTypes.FETCH_GET_NEW_PROFILES_CHUNK,
    fetchGetNewProfilesChunkRequest
  );
}
