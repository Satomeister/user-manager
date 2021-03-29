import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import { Result } from "antd";

import "./AuthPage.scss";

import { Login, Signup } from "./components";

const AuthPage: FC = (): JSX.Element => {
  return (
    <div className="auth-page">
      <Switch>
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={Signup} />
        <Route exact path="/auth/signup" component={Signup} />
        <Route
          path="*"
          render={() => (
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default AuthPage;
