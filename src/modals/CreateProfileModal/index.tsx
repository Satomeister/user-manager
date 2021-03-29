import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, DatePicker, Form, Input, Radio } from "antd";
import moment from "moment";

import ModalWrapper from "../ModalWrapper";

import {
  selectFetchCreateProfileError,
  selectFetchCreateProfileLoadingStatus,
} from "../../store/ducks/user/selector";
import { LoadingStatus } from "../../store/types";
import Title from "antd/es/typography/Title";
import {
  fetchCreateProfile,
  setFetchCreateProfileLoadingStatus,
} from "../../store/ducks/profile/actionCreators";
import { FetchCreateProfilePayload } from "../../store/ducks/profile/contracts/state";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

interface CreateProfileModalProps {
  onClose: () => void;
}

const CreateProfileModal: FC<CreateProfileModalProps> = ({
  onClose,
}): JSX.Element => {
  const dispatch = useDispatch();

  const fetchCreateProfileLoadingStatus = useSelector(
    selectFetchCreateProfileLoadingStatus
  );
  const fetchCreateProfileError = useSelector(selectFetchCreateProfileError);

  const handleFinish = (values: FetchCreateProfilePayload) => {
    values.birthdate = new Date(values.birthdate);
    dispatch(fetchCreateProfile(values));
  };

  useEffect(() => {
    if (fetchCreateProfileLoadingStatus === LoadingStatus.SUCCESS) {
      dispatch(setFetchCreateProfileLoadingStatus(LoadingStatus.NEVER));
      onClose();
    }
  }, [fetchCreateProfileLoadingStatus, onClose, dispatch]);

  return (
    <ModalWrapper onClose={onClose}>
      <Title level={2}>Create Profile</Title>
      {!!fetchCreateProfileError && (
        <Alert
          className="error-text"
          message={fetchCreateProfileError}
          type="error"
        />
      )}
      <Form layout={"vertical"} onFinish={handleFinish}>
        <Form.Item
          name="name"
          label="name"
          rules={[
            { required: true, message: "Name is required" },
            {
              min: 3,
              message: "Name must be at lease 3 characters",
            },
            { max: 40, message: "Password must be less than 40 characters" },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="city"
          label="city"
          rules={[
            { required: true, message: "City is required" },
            {
              max: 50,
              message: "Password must be less than 50 characters",
            },
          ]}
        >
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item
          name="gender"
          rules={[{ required: true, message: "Gender is required" }]}
        >
          <Radio.Group>
            <Radio value={"male"}>male</Radio>
            <Radio value={"female"}>female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="birthdate"
          label="birthdate"
          rules={[{ required: true, message: "Birthdate is required" }]}
        >
          <DatePicker
            disabledDate={(current) => {
              return current && current > moment(new Date(), "YYYY-MM-DD");
            }}
            format={dateFormatList}
          />
        </Form.Item>
        <Form.Item>
          <Button
            disabled={fetchCreateProfileLoadingStatus === LoadingStatus.LOADING}
            type="primary"
            htmlType="submit"
          >
            Create
          </Button>
          <Button
            onClick={onClose}
            style={{ marginLeft: 15 }}
            type="default"
            htmlType="button"
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </ModalWrapper>
  );
};

export default CreateProfileModal;
