import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ContextExample from "./useContext/ContextExample";
import Counter from "./useState/StateExample";

const App = () => (
  <div className="App">
    <ContextExample />
    <Counter />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
