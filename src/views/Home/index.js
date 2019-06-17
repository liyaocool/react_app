import React, {
  useState,
  forwardRef,
  useRef,
  useImperativeHandle
} from "react";
import { INCREMENT, ADD_NUM } from "@/store/actions";
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
    increment: () => dispatch(INCREMENT),
    addNum: () => dispatch(ADD_NUM)
  };
}
//子组件
function ChildComp(props, ref) {
  function HaHa() {
    console.log("哈哈,我是子组件内的方法");
    // props.parentMethod();
  }
  useImperativeHandle(ref, () => ({
    HaHa
  }));
  return (
    <>
      <h1>子组件</h1>
      <h1>子组件接收到的参数:{props.num}</h1>
      <button onClick={HaHa}>子组件按钮</button>
    </>
  );
}
let Child = forwardRef(ChildComp);

//父组件
function MyHome(props, ref) {
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
      <h1>state计数:{count}</h1>
      <h1>store计数:{props.count}</h1>
      <button onClick={toFocus}>父组件按钮</button>
      <input
        ref={child_test}
        value={count}
        onChange={handleChange}
        type="text"
      />
      <Child ref={my_ref} num={count} parentMethod={parentMethod} />
    </div>
  );
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyHome);

export default Home;
