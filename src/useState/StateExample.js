import React, { useState } from "react";

// without custom hook
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      counter value: {count}
    </div>
  );
};

// with custom hook
const CounterWithCustomHook = () => {
  const [count, increment, decrement] = useCounter(0);
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      counter value: {count}
    </div>
  );
};

const useCounter = initialState => {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return [count, increment, decrement];
};

export default CounterWithCustomHook;
