import React, { FC } from "react";
import { Alert, Button, Form, Input } from "antd";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../../store/ducks/auth/actionCreators";
import { selectFetchLoginError } from "../../../store/ducks/auth/selector";
import { selectIsAuth } from "../../../store/ducks/user/selector";

interface LoginState {
  email: string;
  password: string;
}

const Login: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const fetchLoginError = useSelector(selectFetchLoginError);
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
          rules={[{ required: true, message: "Email is required" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button className="submit-button" type="primary" htmlType="submit">
            Log in
          </Button>
          Or <Link to={"/auth/signup"}>register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
