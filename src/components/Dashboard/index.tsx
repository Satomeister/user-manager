import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Title from "antd/es/typography/Title";

import { Descriptions } from "antd";

import { UsersApi } from "../../api/users";
import Preloader from "../Preloader";
import { AuthApi } from "../../api/auth";
import { setUserData } from "../../store/ducks/user/actionCreators";

interface DashboardState {
  usersCount: number;
  profilesCount: number;
  majorityProfilesCount: number;
}

const Dashboard: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const [data, setData] = useState<DashboardState>();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchGetData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await UsersApi.getUsersData();
      setData(data);
      setLoading(false);
    } catch (error) {
      if (error.response?.status === 401) {
        try {
          const { data } = await AuthApi.refresh();
          localStorage.setItem("token", data);
          await fetchGetData();
        } catch (error) {
          localStorage.removeItem("token");
          dispatch(setUserData(null));
        }
      }
    }
  }, [dispatch]);

  useEffect(() => {
    fetchGetData();
  }, [fetchGetData]);

  return (
    <div>
      <Title level={2}>Dashboard</Title>
      {!loading ? (
        <Descriptions column={3} bordered>
          <Descriptions.Item label="Users count">
            {data?.usersCount}
          </Descriptions.Item>
          <Descriptions.Item label="Profiles count">
            {data?.profilesCount}
          </Descriptions.Item>
          <Descriptions.Item label="Majority profiles">
            {data?.majorityProfilesCount}
          </Descriptions.Item>
        </Descriptions>
      ) : (
        <Preloader center />
      )}
    </div>
  );
};

export default Dashboard;
