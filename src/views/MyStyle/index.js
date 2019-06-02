import React, { Component } from "react";

class MyStyle extends Component {
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
        <h1>样式-页面</h1>
      </div>
    );
  }
}

export default MyStyle;
