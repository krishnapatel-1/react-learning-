import React from "react";
import Card from "./component/Card";
import {useState} from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("button clicked");
    setCount(count + 1);
  }

  return (
    <div>
      <Card handleClick={handleClick} text="Click Me">
        <h1>Count</h1>
  
        <p>{count}</p>
      </Card>
    </div>
  );
}

export default App;
