import React, { useState, useRef } from "react";

//子组件
function ChildComp(props, ref) {
  const [city,setCity] = useState('')
  function childMethod(props) {
    setCity(city + '--TnT--')
    console.log("我是子组件方法", city);
    props.parentMethod(city)
  }
  return (
    <div style={{ backgroundColor: "#ddd" }}>
      <p>我是子组件</p>
      <button onClick={()=>childMethod(props)}>
        子组件按钮
      </button>
      <h1>父组件传递的参数:{props.abc}</h1>
    </div>
  );
}

//父组件
export default function Home(props) {
  const [count, setCount] = useState(0);
  const child_test = useRef(null);
  const parentMethod = (city) => {
    setCount(count + 1);
    console.log("我是父组件方法",city);
  };
  const toFocus = () => {
    console.log("child_test", child_test);
    child_test.current.focus();
  };
  const handleChange = () => {
    setCount( child_test.current.value)
  }
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <h1>Home页面</h1>
      <hr />
      <p>我是父组件</p>
      <button onClick={toFocus}>父组件,获取焦点</button>
      <h1>计数:{count}</h1>
      <input ref={child_test} value={count} onChange={handleChange} type="text" />
      <ChildComp abc="123"  parentMethod={parentMethod}/>
    </div>
  );
}
