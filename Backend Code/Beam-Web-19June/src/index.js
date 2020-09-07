import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import HomeLayout from "layouts/Home.js";
import GlobalFonts from "components/fonts/fonts";

import "assets/scss/material-dashboard-pro-react.scss?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <GlobalFonts />
    <Switch>
      <Route path="/auth" component={AuthLayout} />
      <Route path="/" component={HomeLayout} />
      <Redirect from="/" to="/auth/register" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
