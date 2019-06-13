import React, { Component } from "react";
import propTypes from "prop-types";
class Child extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.num === this.props.num) {
      console.log(nextProps.num, this.props.num);
      return false;
    }
    return true;
  }
  render() {
    return (
      <div>
        <h1>Child:{this.props.num}</h1>
      </div>
    );
  }
}

Child.propTypes = {
  ParentMethod: propTypes.func
};

export default class MyPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myNumber: 0
    };
    this.ParentMethod = this.ParentMethod.bind(this);
  }
  ParentMethod() {
    this.setState({
      myNumber: 3
    });
  }

  render() {
    return (
      <div>
        <h1>MyPlugin:{this.state.myNumber}</h1>
        <div>
          <input
            value={this.state.myNumber}
            onChange={e =>
              this.setState({
                myNumber: e.target.value
              })
            }
          />
        <button onClick={this.ParentMethod}>设置固定值3</button>
        </div>

        <Child num={this.state.myNumber} />
      </div>
    );
  }
}
