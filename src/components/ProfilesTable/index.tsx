import React, { FC, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Button, Modal, Space, Table, TablePaginationConfig } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import { PAGE_SIZE } from "../../store/ducks/user/contracts/state";
import { ModalsContext } from "../../context/modals/reducer";
import { openEditProfileModal } from "../../context/modals/actionCreators";
import { selectFetchGetNewProfilesChunkLoadingStatus } from "../../store/ducks/user/selector";
import { LoadingStatus } from "../../store/types";
import { Profile } from "../../store/ducks/profile/contracts/state";
import {
  fetchDeleteProfile,
  fetchGetNewProfilesChunk,
} from "../../store/ducks/profile/actionCreators";

const { confirm } = Modal;

interface ProfilesTableProps {
  profiles: Profile[];
  totalCount: number;
  userId: string;
}

export const profileColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Birthdate",
    dataIndex: "birthdate",
    key: "birthdate",
    render: (date: Date) => moment(date).format("YYYY.MM.DD"),
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date: Date) => moment(date).format("YYYY.MM.DD HH:mm"),
  },
];

const ProfilesTable: FC<ProfilesTableProps> = ({
  profiles,
  userId,
  totalCount,
}) => {
  const dispatch = useDispatch();
  const modalsDispatch = useContext(ModalsContext);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchGetNewProfilesChunkLoadingStatus = useSelector(
    selectFetchGetNewProfilesChunkLoadingStatus
  );

  const actionColumn = {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: (_: any, profile: Profile) => (
      <Space>
        <Button type="primary" onClick={() => handleEditProfile(profile)}>
          Edit
        </Button>
        <Button danger onClick={() => handleDeleteProfile(profile._id)}>
          Delete
        </Button>
      </Space>
    ),
  };

  const handleEditProfile = (profile: Profile) => {
    modalsDispatch(openEditProfileModal(profile));
  };

  const handleDeleteProfile = (profileId: string) => {
    if (userId) {
      confirm({
        icon: <ExclamationCircleOutlined />,
        content: <div>Are you sure you want to delete this profile?</div>,
        onOk() {
          dispatch(fetchDeleteProfile({ profileId, userId }));
        },
      });
    }
  };

  const handleTableChange = ({ current }: TablePaginationConfig) => {
    if (current) {
      dispatch(fetchGetNewProfilesChunk({ page: current, userId }));
      setCurrentPage(current);
    }
  };

  return (
    <Table
      loading={fetchGetNewProfilesChunkLoadingStatus === LoadingStatus.LOADING}
      dataSource={profiles.map((p) => ({ ...p, key: p._id }))}
      columns={[...profileColumns, actionColumn]}
      pagination={{
        current: currentPage,
        pageSize: PAGE_SIZE,
        total: totalCount,
        position: ["bottomCenter"],
      }}
      onChange={handleTableChange}
    />
  );
};

export default ProfilesTable;
