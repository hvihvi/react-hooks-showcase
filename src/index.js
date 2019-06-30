import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ContextExample from "./useContext/ContextExample";
import Counter from "./useState/StateExample";
import EffectExample from "./useEffect/EffectExample";

const App = () => (
  <div className="App">
    <ContextExample />
    <Counter />
    <EffectExample initialCount={0} />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
