import React from "react";
import Child2 from "./child2";
const ThemeContext = React.createContext();

const App5_1 = () => {
  const [theme, setTheme] = React.useState("light");

  
   
 
  return (
    <div  >
      <ThemeContext.Provider value={{ theme, setTheme }}>
       
        <Child2 />
      </ThemeContext.Provider>
    </div>
  );
};

export default App5_1;
export { ThemeContext };
