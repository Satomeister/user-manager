import { all } from "redux-saga/effects";

import { authSaga } from "./ducks/auth/sagas";
import { profileSaga } from "./ducks/user/sagas";
import { usersSaga } from "./ducks/users/sagas";
import { userSaga } from "./ducks/profile/sagas";

export default function* rootSaga() {
  yield all([authSaga(), userSaga(), usersSaga(), profileSaga()]);
}
