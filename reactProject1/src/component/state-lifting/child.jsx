import React from "react";
import { useState } from "react";
const Child = (props) => {
  return (
    <div>
      <h1>{props.heading}</h1>
      {props.show ? (
        
        <p> {props.text}</p>
      ) : (
        <button onClick={props.setShow}>Show</button>
      )}
    </div>
  );
};

export default Child;
