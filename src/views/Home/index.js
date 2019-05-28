import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  goLists() {
    this.props.history.push({pathname:'/Lists', params:{test:'aaa'}})
  }
  render() {
    return (
      <div>
        {/* <Link to="/Lists">去列表页</Link> */}
        <button onClick={this.goLists.bind(this)}>去列表页</button>
        <p>{JSON.stringify(this.props.history.location.params)}</p>
      </div>
    );
  }
}
