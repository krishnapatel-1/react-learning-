import React from "react";
import Child3 from "./child3";
import { useContext } from "react";
import { ThemeContext } from "./app5-1";
const Child2 = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  function handlClick() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  const containerStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    minHeight: "100vh"
  };

  return (
    <div style={containerStyle}>
      <h1>{theme}</h1>
      <button onClick={handlClick}>Change Theme</button>
    </div>
  );
};

export default Child2;
