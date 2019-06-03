import React, { Component } from "react";

class MyPlugin extends Component {
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
        <h1>插件-页面</h1>
      </div>
    );
  }
}

export default MyPlugin;
