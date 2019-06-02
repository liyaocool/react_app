import React, { Component } from "react";

class Mine extends Component {
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
        <h1>我的-页面</h1>
      </div>
    );
  }
}

export default Mine;
