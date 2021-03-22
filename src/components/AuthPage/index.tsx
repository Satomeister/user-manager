import React, { FC } from "react";

import "./AuthPage.scss";

import { Switch, Route } from "react-router-dom";
import { Login, Signup } from "./components";

const AuthPage: FC = (): JSX.Element => {
  return (
    <div className="auth-page">
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default AuthPage;
