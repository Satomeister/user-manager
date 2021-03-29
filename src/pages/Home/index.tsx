import React, { FC, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { Button, Layout, Result, Typography } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

import "./Home.scss";

import {
  Dashboard,
  Main,
  ModalList,
  Navigation,
  UserFull,
  Users,
} from "../../components";
import { selectIsAuth, selectUser } from "../../store/ducks/user/selector";
import { fetchLogout } from "../../store/ducks/auth/actionCreators";
import { selectFetchLogoutLoadingStatus } from "../../store/ducks/auth/selector";
import { LoadingStatus } from "../../store/types";
import { ModalsContext, modalsReducer } from "../../context/modals/reducer";

const { Text } = Typography;

const Home: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const [modalState, modalsDispatch] = useReducer(modalsReducer, {
    modalType: null,
    state: null,
  });

  const user = useSelector(selectUser);
  const isAuth = useSelector(selectIsAuth);
  const fetchLogoutLoadingStatus = useSelector(selectFetchLogoutLoadingStatus);

  if (!isAuth) {
    return <Redirect to="/auth/login" />;
  }

  const handleLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <ModalsContext.Provider value={modalsDispatch}>
      <ModalList modal={modalState} />
      <div className="home">
        <Header className="header">
          <div className="logo">UserManager</div>
          <Button
            disabled={fetchLogoutLoadingStatus === LoadingStatus.LOADING}
            onClick={handleLogout}
            icon={<LogoutOutlined />}
          >
            Logout
          </Button>
        </Header>
        <Layout>
          <Sider className="sidebar">
            <div className="user__data">
              <Text className="user__data-fullname" strong>
                {user?.fullname}
              </Text>
              <Text className="user__data-email">{user?.email}</Text>
            </div>
            {user?.isAdmin && <Navigation />}
          </Sider>
          <Content className="main">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/users/:userId" component={UserFull} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route
                path="*"
                render={() => (
                  <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                  />
                )}
              />
            </Switch>
          </Content>
        </Layout>
      </div>
    </ModalsContext.Provider>
  );
};

export default Home;
