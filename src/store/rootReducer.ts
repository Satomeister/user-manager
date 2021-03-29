import { combineReducers } from "redux";
import { authReducer, AuthState } from "./ducks/auth/reducer";
import { userReducer, UserState } from "./ducks/user/reducer";
import { usersReducer, UsersState } from "./ducks/users/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  users: usersReducer,
});

export interface AppState {
  auth: AuthState;
  user: UserState;
  users: UsersState;
}

export default rootReducer;
