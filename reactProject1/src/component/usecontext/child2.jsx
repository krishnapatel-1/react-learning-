import React from 'react'
import Child3 from './child3'
import { useContext } from 'react'
import { ThemeContext } from './app5-1' 
const Child2 = () => {
  const {theme,setTheme} = useContext(ThemeContext)
  function handlClick(){
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <div>
     
 <h1>{theme}</h1>
     <button onClick={handlClick}>Change Theme</button> 

    </div>
  )
}

export default Child2
