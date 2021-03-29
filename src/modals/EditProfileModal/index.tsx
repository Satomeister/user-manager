import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, DatePicker, Form, Input, Radio } from "antd";
import moment from "moment";

import ModalWrapper from "../ModalWrapper";
import {
  selectFetchEditProfileError,
  selectFetchEditProfileLoadingStatus,
} from "../../store/ducks/user/selector";
import { LoadingStatus } from "../../store/types";
import {
  FetchEditProfilePayload,
  Profile,
} from "../../store/ducks/profile/contracts/state";
import {
  fetchEditProfile,
  setFetchEditProfileLoadingStatus,
} from "../../store/ducks/profile/actionCreators";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

interface EditProfileModalProps {
  profile: Profile;
  onClose: () => void;
}

const EditProfileModal: FC<EditProfileModalProps> = ({
  profile,
  onClose,
}): JSX.Element => {
  const dispatch = useDispatch();

  const fetchEditProfileLoadingStatus = useSelector(
    selectFetchEditProfileLoadingStatus
  );
  const fetchEditProfileError = useSelector(selectFetchEditProfileError);

  const handleFinish = (values: FetchEditProfilePayload) => {
    values.birthdate = new Date(values.birthdate);
    values._id = profile._id;
    dispatch(fetchEditProfile(values));
  };

  useEffect(() => {
    if (fetchEditProfileLoadingStatus === LoadingStatus.SUCCESS) {
      dispatch(setFetchEditProfileLoadingStatus(LoadingStatus.NEVER));
      onClose();
    }
  }, [fetchEditProfileLoadingStatus, onClose, dispatch]);

  return (
    <ModalWrapper onClose={onClose}>
      <h2>Edit Profile</h2>
      {!!fetchEditProfileError && (
        <Alert
          className="error-text"
          message={fetchEditProfileError}
          type="error"
        />
      )}
      <Form layout={"vertical"} onFinish={handleFinish}>
        <Form.Item
          label="name"
          name="name"
          rules={[
            { required: true, message: "Name is required" },
            {
              min: 3,
              message: "Name must be at lease 3 characters",
            },
            { max: 40, message: "Password must be less than 40 characters" },
          ]}
          initialValue={profile.name}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          label="city"
          name="city"
          rules={[
            { required: true, message: "City is required" },
            {
              max: 50,
              message: "Password must be less than 50 characters",
            },
          ]}
          initialValue={profile.city}
        >
          <Input placeholder="City" />
        </Form.Item>
        <Form.Item
          name="gender"
          rules={[{ required: true, message: "Gender is required" }]}
          initialValue={profile.gender}
        >
          <Radio.Group>
            <Radio value={"male"}>male</Radio>
            <Radio value={"female"}>female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="birthdate"
          name="birthdate"
          rules={[{ required: true, message: "Birthdate is required" }]}
          initialValue={moment(profile.birthdate)}
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
            disabled={fetchEditProfileLoadingStatus === LoadingStatus.LOADING}
            type="primary"
            htmlType="submit"
          >
            Edit
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

export default EditProfileModal;
