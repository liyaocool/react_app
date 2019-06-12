import React, { useState } from "react";

export default function User(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>user页面</h1>
      <hr></hr>
      <h1>{count}</h1>
    </div>
  );
}
