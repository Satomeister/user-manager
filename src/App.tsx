import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "antd/dist/antd.css";

import { fetchGetMe } from "./store/ducks/user/actionCreators";
import { selectFetchGetMeLoadingStatus } from "./store/ducks/user/selector";
import { LoadingStatus } from "./store/types";
import { Preloader } from "./components";
import { AuthPage, Home } from "./pages";

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
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;
