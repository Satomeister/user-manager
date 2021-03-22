import { all } from "redux-saga/effects";

import { authSaga } from "./ducks/auth/sagas";
import { userSaga } from "./ducks/user/sagas";

export default function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
