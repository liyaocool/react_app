import React, { useState, useRef } from "react";
import "./index.css";
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
      <div>
        <ul>{listItem}</ul>
      </div>
    </>
  );
}

export default MyDemo;
