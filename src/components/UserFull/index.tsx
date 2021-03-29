import React, { FC, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
import { ExclamationCircleOutlined, RollbackOutlined } from "@ant-design/icons";
import { Button, Descriptions, Modal, Result, Space } from "antd";
import Title from "antd/es/typography/Title";

import {
  fetchDeleteUser,
  fetchGetSelectedUser,
  setFetchDeleteUserLoadingStatus,
} from "../../store/ducks/users/actionCreators";
import {
  selectFetchDeleteUserLoadingStatus,
  selectFetchGetSelectedUserLoadingStatus,
  selectSelectedUser,
} from "../../store/ducks/users/selector";
import { LoadingStatus } from "../../store/types";
import Preloader from "../Preloader";
import ProfilesTable from "../ProfilesTable";
import { ModalsContext } from "../../context/modals/reducer";
import { openEditUserModal } from "../../context/modals/actionCreators";

const { confirm } = Modal;

const UserFull: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ userId: string }>();

  const modalsDispatch = useContext(ModalsContext);

  const selectedUser = useSelector(selectSelectedUser);
  const fetchGetSelectedUserLoadingStatus = useSelector(
    selectFetchGetSelectedUserLoadingStatus
  );

  const fetchDeleteUserLoadingStatus = useSelector(
    selectFetchDeleteUserLoadingStatus
  );

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.fullname;
    }
  }, [selectedUser]);

  useEffect(() => {
    dispatch(fetchGetSelectedUser(params.userId));
  }, [params.userId, dispatch]);

  useEffect(() => {
    if (fetchDeleteUserLoadingStatus === LoadingStatus.SUCCESS) {
      history.push("/users");
      dispatch(setFetchDeleteUserLoadingStatus(LoadingStatus.NEVER));
    }
  }, [fetchDeleteUserLoadingStatus, dispatch, history]);

  const handleBack = () => {
    history.push("/users");
  };

  const handleEditUser = () => {
    if (selectedUser) {
      modalsDispatch(openEditUserModal(selectedUser));
    }
  };

  const handleDeleteUser = () => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: <div>Are you sure you want to delete this user?</div>,
      onOk() {
        if (selectedUser) {
          dispatch(fetchDeleteUser(selectedUser._id));
        }
      },
    });
  };

  if (fetchGetSelectedUserLoadingStatus === LoadingStatus.ERROR) {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, this user does not exist."
      />
    );
  }

  return (
    <div>
      <Button
        style={{ padding: 0 }}
        type={"link"}
        onClick={handleBack}
        icon={<RollbackOutlined />}
      >
        Users
      </Button>
      {fetchGetSelectedUserLoadingStatus !== LoadingStatus.LOADING ? (
        <div>
          <Title level={1}>{selectedUser?.fullname}</Title>
          <Descriptions
            style={{ marginBottom: 20 }}
            column={4}
            size={"small"}
            bordered
          >
            <Descriptions.Item label="Email">
              {selectedUser?.email}
            </Descriptions.Item>
            <Descriptions.Item label="Created At">
              {moment(selectedUser?.createdAt).format("YYYY.MM.DD HH:mm")}
            </Descriptions.Item>
            <Descriptions.Item label="Role">
              {selectedUser?.isAdmin ? "admin" : "member"}
            </Descriptions.Item>
            <Descriptions.Item label="Profiles Count">
              {selectedUser?.profilesCount}
            </Descriptions.Item>
          </Descriptions>
          <Space style={{ marginBottom: 20 }}>
            <Button onClick={handleEditUser} type="primary">
              Edit
            </Button>
            <Button onClick={handleDeleteUser}>Delete</Button>
          </Space>
          <Title level={3}>Profiles</Title>
          {selectedUser && (
            <ProfilesTable
              profiles={selectedUser.profiles}
              userId={selectedUser._id}
              totalCount={selectedUser.profilesCount}
            />
          )}
        </div>
      ) : (
        <Preloader center />
      )}
    </div>
  );
};

export default UserFull;
