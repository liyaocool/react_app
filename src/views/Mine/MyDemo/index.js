import React, { useState, useRef } from "react";
import {connect} from 'react-redux'
import "./index.css";
import {INCREMENT} from '../../../store/action/index.js'
// import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

function MyDemo(props) {
  const [List, setList] = useState([
    {
      title: "测试标题1"
    },
    {
      title: "测试标题2"
    }
  ]);
  const myInput = useRef(null);

  const addList = () => {
    let obj = {
      title: myInput.current.value
    };
    setList([...List, obj]);
    console.log(List)
  };
  const deleteItem = index => {
    let newList = List.filter((value, key) => {
      return key === index ? false : true;
    });
    setList([...newList]);
    console.log(List)
  };
  const listItem = List.map((item, index) => {
    return (
      <li key={index} className="list_item">
        <span>{item.title}</span>
        <button onClick={() => deleteItem(index)}>删除</button>
      </li>
    );
  });

  return (
    <>
      <input ref={myInput} />
      <button onClick={addList}>增加</button>
      <h1>示例列表</h1>
      <h1>{props.count}</h1>
      <button onClick={props.onIncreaseClick}>增加store</button>
      <div>
        <ul>{listItem}</ul>
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return {
    count: state.count
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(INCREMENT)
  }
}
MyDemo = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDemo)
export default MyDemo;
