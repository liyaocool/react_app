import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MyPluginDetail from "./MyPluginDetail/index";

class MyPlugin extends Component {
  render() {
    return (
      <div>
        <Router basename="/MyPlugin">
          <h1>MyPlugin</h1>
          <Link to={{ pathname: "/MyPluginDetail", params: { abc: "abc" } }}>
            去插件详情页
          </Link>

          <Switch>
            <Route path="/MyPluginDetail" component={MyPluginDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MyPlugin;
