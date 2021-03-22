import { combineReducers } from "redux";
import { authReducer, AuthState } from "./ducks/auth/reducer";
import { userReducer, UserState } from "./ducks/user/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export interface AppState {
  auth: AuthState;
  user: UserState;
}

export default rootReducer;
