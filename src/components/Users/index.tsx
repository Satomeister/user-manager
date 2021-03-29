import React, { FC, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Button,
  Empty,
  Space,
  Table,
  Modal,
  TablePaginationConfig,
} from "antd";
import Title from "antd/es/typography/Title";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import moment from "moment";

import {
  fetchDeleteUser,
  fetchGetTotalUsersCount,
  fetchGetUsers,
} from "../../store/ducks/users/actionCreators";
import {
  selectFetchGetUsersLoadingStatus,
  selectTotalUsersCount,
  selectUsers,
} from "../../store/ducks/users/selector";
import { LoadingStatus } from "../../store/types";
import { PAGE_SIZE, User } from "../../store/ducks/user/contracts/state";
import { ModalsContext } from "../../context/modals/reducer";
import { openEditUserModal } from "../../context/modals/actionCreators";

const { confirm } = Modal;

const usersColumns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Fullname",
    dataIndex: "fullname",
    key: "fullname",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date: Date) => moment(date).format("YYYY.MM.DD HH:mm"),
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    render: (role: Boolean) => <div>{role ? "admin" : "member"}</div>,
  },
];

const Users: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();

  const modalsDispatch = useContext(ModalsContext);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const users = useSelector(selectUsers);
  const fetchGetUsersLoadingStatus = useSelector(
    selectFetchGetUsersLoadingStatus
  );
  const totalUsersCount = useSelector(selectTotalUsersCount);

  useEffect(() => {
    document.title = `Users page ${currentPage}`;
  }, [currentPage]);

  useEffect(() => {
    dispatch(fetchGetTotalUsersCount());
    dispatch(fetchGetUsers(1));
  }, [dispatch]);

  const actionColumn = {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (_: any, user: User) => (
      <Space>
        <Button onClick={() => handleRedirectToUser(user._id)}>More</Button>
        <Button type="primary" onClick={() => handleEditUser(user)}>
          Edit
        </Button>
        <Button danger onClick={() => handleDeleteUser(user._id)}>
          Delete
        </Button>
      </Space>
    ),
  };

  const handleRedirectToUser = (userId: string) => {
    history.push(`/users/${userId}`);
  };

  const handleEditUser = (user: User) => {
    modalsDispatch(openEditUserModal(user));
  };

  const handleDeleteUser = (userId: string) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: <div>Are you sure you want to delete this user?</div>,
      onOk() {
        dispatch(fetchDeleteUser(userId));
      },
    });
  };

  const handleTableChange = ({ current }: TablePaginationConfig) => {
    if (current) {
      dispatch(fetchGetUsers(current));
      setCurrentPage(current);
    }
  };

  return (
    <div>
      <Title level={2}>Users</Title>
      {users ? (
        <Table
          loading={fetchGetUsersLoadingStatus === LoadingStatus.LOADING}
          columns={[...usersColumns, actionColumn]}
          dataSource={users.map((user) => ({
            ...user,
            key: user._id,
            role: user.isAdmin,
          }))}
          pagination={{
            current: currentPage,
            pageSize: PAGE_SIZE,
            total: totalUsersCount - 1,
            position: ["bottomCenter"],
          }}
          onChange={handleTableChange}
        />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Users;
