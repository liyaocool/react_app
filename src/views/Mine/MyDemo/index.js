import React, { useState, memo, useEffect, useCallback } from "react";
import { increment, addNum, setNum } from "@/store/actions";
import { connect } from "react-redux";
//store映射给props
function mapStateToProps({ countReducer, numberReducer }) {
  return {
    count: countReducer.count,
    num: numberReducer.num
  };
}
function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(increment),
    addNum: () => dispatch(addNum),
    setNum: () => {
      dispatch(setNum(3));
    }
  };
}
const Child = memo(props => {
  const { list, setList } = props;
  //删除某项
  function deleteItem(index) {
    let newList = list.filter((item, key) => {
      if (key === index) {
        return false;
      } else {
        return true;
      }
    });
    setList([...newList]);
  }
  //循环列表
  const listItem = list.map((item, index) => {
    return (
      <li
        key={index}
        style={{
          border: "1px solid #333",
          margin: "20px 0",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <span>{index + 1}.</span>
        <span>{item}</span>
        <button onClick={() => deleteItem(index)}>删除-</button>
      </li>
    );
  });
  return (
    <div
      style={{ border: "1px solid #777", padding: "20px", margin: "20px 0" }}
    >
      <h1>Child(子组件)</h1>
      <ul>{listItem}</ul>
    </div>
  );
});

//主组件
function Demo(props) {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const ChildCallBack = useCallback(Child, [list, setList]);
  useEffect(() => {
    console.log(props.count, props.num);
  });
  function addItem() {
    setList([...list, input]);
  }
  return (
    <div
      style={{ border: "1px solid #111", padding: "20px", margin: "20px 0" }}
    >
      <h1>MyDemo(父组件)</h1>
      <h1>
        store---count:{props.count} ---num: {props.num}
      </h1>
      <button onClick={props.increment}>递增count</button>
      <button onClick={props.addNum}>递增num</button>
      <button onClick={props.setNum}>设置num</button>
      <br />
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addItem}>添加事项+</button>
      <ChildCallBack list={list} setList={setList} />
    </div>
  );
}

const MyDemo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
export default MyDemo;
