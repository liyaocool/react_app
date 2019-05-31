import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomeDetail from "./HomeDetail/index";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Router basename="/Home">
          <h1>Home</h1>
          <Link to={{ pathname: "/HomeDetail", params: { test: "aaa" } }}>
            首页详情页
          </Link>

          <Switch>
            <Route path="/HomeDetail" component={HomeDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
}
