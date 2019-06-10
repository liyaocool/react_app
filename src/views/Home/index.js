import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle
} from "react";

//子组件
function ChildComp(props, ref) {
  function HaHa() {
    console.log("哈哈,我是子组件内的方法");
    props.parentMethod()
  }
  useImperativeHandle(ref, () => ({
    HaHa
  }));
  return <>
    <h1>子组件</h1>
    <h1>子组件接收到的参数:{props.num}</h1>
    <button onClick={HaHa}>子组件按钮</button>
  </>;
}
ChildComp = forwardRef(ChildComp);

//父组件
export default function Home(props, ref) {
  const [count, setCount] = useState(0);
  const child_test = useRef(null);
  const my_ref = useRef(null);
  const parentMethod = city => {
    setCount(count + 1);
    console.log("我是父组件方法", city);
  };
  const toFocus = () => {
    console.log("child_test", child_test);
    child_test.current.focus();
    my_ref.current.HaHa();
  };
  const handleChange = () => {
    setCount(child_test.current.value);
  };
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <h1>Home页面</h1>
      <hr />
      <p>我是父组件</p>
      <h1>计数:{count}</h1>
      <button onClick={toFocus}>父组件按钮</button>
      <input
        ref={child_test}
        value={count}
        onChange={handleChange}
        type="text"
      />
      <ChildComp ref={my_ref} num={count} parentMethod={parentMethod} />
    </div>
  );
}
