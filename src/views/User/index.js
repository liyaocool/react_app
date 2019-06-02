import React, { Component } from "react";

class User extends Component {
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
        <h1>User</h1>
      </div>
    );
  }
}

export default User;
