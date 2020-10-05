import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Loginpage from './views/LoginPage/Loginpage.jsx'
// core components
import Admin from "layouts/Admin.jsx";
import routes from "routes.js";

import "assets/css/material-dashboard-react.css?v=1.6.0";
import Viewadmins from "./views/Adminprofile/admins";
import NewAdmin from "./views/Adminprofile/Newadmin";
import Viewadmin from "./views/Adminprofile/Viewadmin";
const hist = createBrowserHistory();

ReactDOM.render(
  
  <Router history={hist}>
 <Switch>

    <Route path="/login" component={Loginpage} />
      <Route  path="/admin" component={Admin} />
      <Route path="/root" component={Viewadmins} />
      <Route path="/admins/:id" component={Viewadmin} />
      <Route path="/newadmin" component={NewAdmin} />
      <Redirect from="/" to="/login" />
      </Switch>
  </Router>,
  document.getElementById("root")
);
