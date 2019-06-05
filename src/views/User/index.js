import React, { createRef, useState, useEffect } from "react";

function MyComponent(props) {
  const myDebug = () => {
    console.log("我是子组件方法");
  };
  return <h1>{props.abc}</h1>;
}

export default function User(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timer);
    };
  });

  let timer = setInterval(() => {
    console.log("-----------");
  }, 2000);

  const startTimer = () => timer;
  const parentDebug = () => {
    console.log("我是父组件方法");
  };
  function clickChild() {
    console.log(232)
  }
  return (
    <div>
      <MyComponent abc="123"/>
      <h1>{count}</h1>
      <input onChange={e => setCount(e.target.value)} />
      <br></br>
      <button onClick={clickChild}>点击</button>
    </div>
  );
}
