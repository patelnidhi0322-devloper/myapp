import { useState } from "react";

function Counter() {
  // state declaration
  const [count, setCount] = useState(0);

  // functions to change state
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "24px", fontWeight: "600" }}>{count}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default Counter;
