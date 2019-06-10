import React, { Component, createRef, forwardRef } from "react";
import propTypes from "prop-types";
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.ChildMethod = this.ChildMethod.bind(this);
  }
  ChildMethod() {
    // this.props.ParentMethod();
    console.log(`子组件方法`);
  }

  render() {
    return (
      <div>
        <button onClick={this.ChildMethod}>子组件调用父组件方法</button>
        Child
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
    this.state = {};
    this.ParentMethod = this.ParentMethod.bind(this);
  }
  ParentMethod() {
    // console.log("父组件方法");
    this.abc.ChildMethod()
  }
  render() {
    return (
      <div>
        <button onClick={this.ParentMethod}>父组件点击</button>
        MyPlugin
        <Child
          ref={ref1 => (this.abc = ref1)}
          // ParentMethod={this.ParentMethod}
        />
      </div>
    );
  }
}
