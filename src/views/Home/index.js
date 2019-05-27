import React, { Component } from "react";
import "../../assets/style/App.css";

class HomePage extends Component {
  handleClick() {
    alert("111");
  }
  render() {
    return (
      <div>
        <div>
          <h1>HomePage</h1>
          <h2>It is {this.props.date}.</h2>
          <button onClick={e => this.handleClick(e)}>Click me</button>
        </div>
      </div>
    );
  }
}

export default HomePage;
