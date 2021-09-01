import React, { useState, useEffect } from "react";
import "../../src/styles.css";
function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button className="button-counter" onClick={() => setCount(count + 1)}>
        Click {count}
      </button>
    </div>
  );
}

export default HookCounterOne;
