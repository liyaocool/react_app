import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Index from "../views/Index/index";
import User from "../views/User/index";
import NotFound from "../views/NotFound/index";

export default class index extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/Index" component={Index} />
            <Route path="/User" component={User} />
            <Route path="/404" component={NotFound} />
            {/* 'exact'精确匹配 '/'时重定向 '/Index' */}
            <Redirect exact from="/" to="/Index/Home" />
            <Redirect from="/*" to="/404" />
          </Switch>
        </Router>
      </div>
    );
  }
}
