import React, { useState, useContext } from "react";

/**
 * Example with simple readable context
 */
const ctx = React.createContext("hi I'm ctx");

export const ReadContextExample = () => {
  const value = useContext(ctx);
  return <div>I simply read value from the context: {value}</div>;
};

/**
 * Example with modifiable context
 */
const ColorCtx = React.createContext();

export const ColorProvider = ({ initialColor, children }) => (
  <ColorCtx.Provider value={useState(initialColor)}>
    {children}
  </ColorCtx.Provider>
);

export const ColorReader = () => {
  const [color] = useContext(ColorCtx);
  return (
    <div style={{ backgroundColor: color }}>
      I read from color Context: {color}
    </div>
  );
};

export const ColorWriter = () => {
  const [color, setColor] = useContext(ColorCtx);
  return <input value={color} onChange={e => setColor(e.target.value)} />;
};

// the first use case doesn't need a provider
// the second use case shares a "color" state between 2 distinct components
// without passing down props
// Note: Unlike redux's connect, a modification to the context will re-render all children
export default () => (
  <>
    <ReadContextExample />
    <ColorProvider initialColor="blue">
      <ColorReader />
      <ColorWriter />
    </ColorProvider>
  </>
);
