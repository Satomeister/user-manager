import React, { FC } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form, Input } from "antd";

import { fetchLogin } from "../../../store/ducks/auth/actionCreators";
import {
  selectFetchLoginError,
  selectFetchLoginLoadingStatus,
} from "../../../store/ducks/auth/selector";
import { selectIsAuth } from "../../../store/ducks/user/selector";
import { LoadingStatus } from "../../../store/types";

interface LoginState {
  email: string;
  password: string;
}

const Login: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const fetchLoginError = useSelector(selectFetchLoginError);
  const fetchLoginLoadingStatus = useSelector(selectFetchLoginLoadingStatus);
  const isAuth = useSelector(selectIsAuth);

  const handleFinish = (values: LoginState) => {
    dispatch(fetchLogin({ email: values.email, password: values.password }));
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-wrapper">
      <h2>Login</h2>
      {!!fetchLoginError && (
        <Alert className="error-text" message={fetchLoginError} type="error" />
      )}
      <Form onFinish={handleFinish}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Email is required" },
            {
              type: "email",
              message: "Email is invalid",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Password is required" },
            {
              min: 6,
              message: "Password must be at lease 6 characters",
            },
            { max: 128, message: "Password must be less than 128 characters" },
          ]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button
            disabled={fetchLoginLoadingStatus === LoadingStatus.LOADING}
            className="submit-button"
            type="primary"
            htmlType="submit"
          >
            Log in
          </Button>
          Or <Link to={"/auth/signup"}>register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
