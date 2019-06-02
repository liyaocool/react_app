import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button } from 'antd';
import HomeDetail from "./HomeDetail/index";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Router basename="/">
          <h1>Home</h1>
          <Link to={{ pathname: "/HomeDetail", params: { test: "aaa" } }}>
            <Button type="primary">首页详情页</Button>
          </Link>

          <Switch>
            <Route path="/HomeDetail" component={HomeDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
}
