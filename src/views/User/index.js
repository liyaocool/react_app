import React, { useState } from "react";

export default function User(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <text>1{process.env.REACT_APP_ABC}</text>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>递增</button>
    </div>
  );
}
