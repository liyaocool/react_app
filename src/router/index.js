import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../views/Home/index";
import Lists from "../views/Lists/index";

export default class index extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact  path="/" component={Home} />
            <Route path="/Lists" component={Lists} />
          </Switch>
        </Router>
      </div>
    );
  }
}
