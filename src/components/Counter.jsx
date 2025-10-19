import { useState } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }

  function decrease() {
    setcount(count - 1);
  }

  return (
    <div className="counter">
      <button className="decrease-btn" onClick={decrease}>
        -
      </button>
      <span className="count-value">{count}</span>
      <button className="increase-btn" onClick={increase}>
        +
      </button>
    </div>
  );
}

export default Counter;
