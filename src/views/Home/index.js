import React, { Component } from "react";
// import { Button } from "antd";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1>首页-页面</h1>
      </div>
    );
  }
}
