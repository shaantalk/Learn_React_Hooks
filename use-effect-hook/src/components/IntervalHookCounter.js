import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);

    // we can make it work without count in the dependency list if we use the 2nd format of setCount like this :
    // setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]); //without count in the dependency list this will not work

  return <h1>{count}</h1>;
}

export default IntervalHookCounter;
