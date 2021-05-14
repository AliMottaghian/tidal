import { lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
const HomePage = lazy(() => import("../pages/home/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default withRouter(routes);
