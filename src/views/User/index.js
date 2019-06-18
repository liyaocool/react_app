import React, { useState, useReducer } from "react";

const init = {
  name: "",
  pwd: "",
  code: "",
  disabled: false,
  msg: "msg"
};
function reducer(state, action) {
  switch (action.type) {
    case "INPUT_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "INPUT_PWD":
      return {
        ...state,
        pwd: action.payload
      };
    case "INPUT_CODE":
      return {
        ...state,
        code: action.payload
      };
    case "SUBMIT":
      return {
        ...state,
        disabled: true,
        msg: "提交中.."
      };
    case "SUCCESS":
      return {
        ...state,
        disabled: false,
        msg: "成功"
      };
    case "ERROR":
      return {
        ...state,
        disabled: false,
        msg: "失败"
      };
    default:
      return {
        ...state
      };
  }
}
export default function User(props) {
  const [state, dispatch] = useReducer(reducer, init);
  const { name, pwd, code, disabled, msg } = state;
  const handleSubmit = () => {
    dispatch({ type: "SUBMIT" });
    //login API接口
    setTimeout(() => {
      dispatch({ type: "SUCCESS" });
    }, 1000);
    console.log(state);
  };
  return (
    <div>
      <h1>user页面{msg}</h1>
      <form>
        <div>
          <label>用户名:</label>
          <input
            value={name}
            onChange={e =>
              dispatch({ type: "INPUT_NAME", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>密码:</label>
          <input
            type="password"
            value={pwd}
            onChange={e =>
              dispatch({ type: "INPUT_PWD", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label>验证码:</label>
          <input
            value={code}
            onChange={e =>
              dispatch({ type: "INPUT_CODE", payload: e.target.value })
            }
          />
        </div>
        <div>
          <button onClick={handleSubmit} disabled={disabled}>
            {disabled ? "提交中..." : "完成"}
          </button>
        </div>
      </form>
    </div>
  );
}
