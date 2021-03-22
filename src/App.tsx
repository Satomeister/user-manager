import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";

import { AuthPage } from "./components";
import { fetchGetMe } from "./store/ducks/user/actionCreators";
import { selectFetchGetMeLoadingStatus } from "./store/ducks/user/selector";
import { LoadingStatus } from "./store/types";
import Preloader from "./components/Preloader";

const App = () => {
  const dispatch = useDispatch();

  const fetchGetMeLoadingStatus = useSelector(selectFetchGetMeLoadingStatus);

  const isReady =
    fetchGetMeLoadingStatus !== LoadingStatus.NEVER &&
    fetchGetMeLoadingStatus !== LoadingStatus.LOADING;

  useEffect(() => {
    dispatch(fetchGetMe());
  }, [dispatch]);

  if (!isReady) {
    return <Preloader size={"large"} fullScreen />;
  }

  return (
    <div>
      <Switch>
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </div>
  );
};
export default App;
