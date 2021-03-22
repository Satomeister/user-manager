import React, { FC } from "react";
import { Alert, Button, Form, Input } from "antd";
import { Link, Redirect } from "react-router-dom";
import { fetchSignup } from "../../../store/ducks/auth/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import { selectFetchSignupError } from "../../../store/ducks/auth/selector";
import { selectIsAuth } from "../../../store/ducks/user/selector";

interface SignupValuesState {
  email: string;
  password: string;
  confirm: string;
}

const SignUp: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const fetchSignupError = useSelector(selectFetchSignupError);
  const isAuth = useSelector(selectIsAuth);

  const handleFinish = (values: SignupValuesState) => {
    dispatch(fetchSignup({ email: values.email, password: values.password }));
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form-wrapper">
      <h2>Sign Up</h2>
      {!!fetchSignupError && (
        <Alert className="error-text" message={fetchSignupError} type="error" />
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
        <Form.Item
          name="confirm"
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input type="password" placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <Button className="submit-button" type="primary" htmlType="submit">
            Sign Up
          </Button>
          Or <Link to="/auth/login">Login</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
