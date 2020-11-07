import React from "react";
import Portal from "./components/Portal";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Portal>
        <h3>children</h3>
      </Portal>
    </div>
  );
}
