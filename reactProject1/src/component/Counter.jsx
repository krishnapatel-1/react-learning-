import "./Counter.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="contatiner">
      <h1>Counter</h1>
      <p className="coutner"> count: {count}</p>
      <button id="btn" onClick={() => setCount(count + 1)}>
        {" "}
        click
      </button>
    </div>
  );
}

export default App;
