import React, { Component } from "react";
import { Link } from "react-router-dom";

class Lists extends Component {
  render() {
    return (
      <div>
        <Link to={{pathname:'/', params:{abc:'abc'}}}>去首页</Link>
        <p>{JSON.stringify(this.props.history.location.params)}</p>
      </div>
    );
  }
}

export default Lists;
