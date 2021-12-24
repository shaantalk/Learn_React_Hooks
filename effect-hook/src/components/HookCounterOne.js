import React, { useState, useEffect } from "react";

function HookCounterOne() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count} times</button>
    </div>
  );
}

export default HookCounterOne;
