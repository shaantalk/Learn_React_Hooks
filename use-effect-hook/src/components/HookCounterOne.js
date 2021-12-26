import React, { useState, useEffect } from "react";

function HookCounterOne() {
  let [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - updating document content");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count {count} times</button>
    </div>
  );
}

export default HookCounterOne;