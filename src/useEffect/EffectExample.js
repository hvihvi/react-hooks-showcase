import React, { useState, useEffect } from "react";

export default ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [effectCallCount, setEffectCallCount] = useState(0);

  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {
    setEffectCallCount(effectCallCount => effectCallCount + 1);
    // return optionnellement une fonction componentWillUnmount
  }, [count]); // deps: l'effet est appelé sur modification des deps

  return (
    <div>
      <p>
        <button onClick={() => setCount(count + 1)}>+</button>count={count}
        <br />
        l'effet c'est déclanché {effectCallCount} fois
      </p>
    </div>
  );
};
