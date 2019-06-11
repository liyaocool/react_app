import React, { Component } from "react";
import propTypes from "prop-types";
class Child extends Component {
  constructor(props) {
    super(props);
    this.ChildMethod = this.ChildMethod.bind(this);
  }
  ChildMethod() {
    // this.props.ParentMethod();
    console.log(`子组件方法`);
  }
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
        <button onClick={this.ChildMethod}>子组件调用父组件方法</button>
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
    this.set = this.set.bind(this);
  }
  ParentMethod() {
    console.log("父组件方法");
  }
  set() {
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
        </div>
        <button onClick={this.ParentMethod}>父组件点击</button>
        <button onClick={this.set}>setState</button>

        <Child num={this.state.myNumber} />
      </div>
    );
  }
}
