import React, { FC, useContext } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

import { selectUser } from "../../store/ducks/user/selector";
import ProfilesTable from "../ProfilesTable";
import { ModalsContext } from "../../context/modals/reducer";
import { openCreateProfileModal } from "../../context/modals/actionCreators";

const Main: FC = (): JSX.Element => {
  const modalsDispatch = useContext(ModalsContext);

  const user = useSelector(selectUser);

  const handleCreateProfile = () => {
    modalsDispatch(openCreateProfileModal());
  };

  return (
    <div>
      <Title level={2}>Profiles</Title>
      <Button
        onClick={handleCreateProfile}
        className="new-item-button"
        type="primary"
        icon={<PlusOutlined />}
        size="large"
      >
        New Profile
      </Button>
      {user && (
        <ProfilesTable
          profiles={user.profiles}
          userId={user._id}
          totalCount={user.profilesCount}
        />
      )}
    </div>
  );
};

export default Main;
