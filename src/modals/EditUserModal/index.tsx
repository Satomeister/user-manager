import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Form, Input, Radio } from "antd";

import ModalWrapper from "../ModalWrapper";
import { User } from "../../store/ducks/user/contracts/state";
import { LoadingStatus } from "../../store/types";
import { EditUserState } from "../../store/ducks/users/contracts/state";
import {
  fetchEditUser,
  setFetchEditUserLoadingStatus,
} from "../../store/ducks/users/actionCreators";
import {
  selectFetchEditUserError,
  selectFetchEditUserLoadingStatus,
} from "../../store/ducks/users/selector";

interface EditProfileModalProps {
  user: User;
  onClose: () => void;
}

const EditProfileModal: FC<EditProfileModalProps> = ({
  user,
  onClose,
}): JSX.Element => {
  const dispatch = useDispatch();

  const fetchEditUserLoadingStatus = useSelector(
    selectFetchEditUserLoadingStatus
  );
  const fetchEditUserError = useSelector(selectFetchEditUserError);

  const handleFinish = (values: EditUserState) => {
    dispatch(fetchEditUser({ values, userId: user._id }));
  };

  useEffect(() => {
    if (fetchEditUserLoadingStatus === LoadingStatus.SUCCESS) {
      dispatch(setFetchEditUserLoadingStatus(LoadingStatus.NEVER));
      onClose();
    }
  }, [fetchEditUserLoadingStatus, onClose, dispatch]);

  return (
    <ModalWrapper onClose={onClose}>
      <h2>Edit User</h2>
      {!!fetchEditUserError && (
        <Alert
          className="error-text"
          message={fetchEditUserError}
          type="error"
        />
      )}
      <Form layout={"vertical"} onFinish={handleFinish}>
        <Form.Item
          label="full name"
          name="fullname"
          rules={[
            { required: true, message: "Full name is required" },
            {
              min: 3,
              message: "Full name must be at lease 3 characters",
            },
            { max: 70, message: "FullName must be less than 70 characters" },
          ]}
          initialValue={user.fullname}
        >
          <Input placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          label="email"
          name="email"
          rules={[
            { required: true, message: "Email is required" },
            {
              type: "email",
              message: "Email is invalid",
            },
          ]}
          initialValue={user.email}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="isAdmin" initialValue={user.isAdmin}>
          <Radio.Group>
            <Radio value={false}>member</Radio>
            <Radio value={true}>admin</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button
            disabled={fetchEditUserLoadingStatus === LoadingStatus.LOADING}
            className="submit-button"
            type="primary"
            htmlType="submit"
          >
            Edit
          </Button>
        </Form.Item>
      </Form>
    </ModalWrapper>
  );
};

export default EditProfileModal;
