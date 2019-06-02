import React, { Component } from "react";

class MyPluginDetail extends Component {
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
        <h1>MyPluginDetail</h1>
      </div>
    );
  }
}

export default MyPluginDetail;
