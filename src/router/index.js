import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../views/Home/index";
import MyPlugin from "../views/MyPlugin/index";

export default class index extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to={{ pathname: "/"}}>首页</Link>
            <Link to={{ pathname: "/MyPlugin"}}>插件</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/MyPlugin" component={MyPlugin} />
          </Switch>
        </Router>
      </div>
    );
  }
}
