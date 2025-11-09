import React from 'react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
 const navigate=useNavigate();
    function handlClick(){
       navigate("/dashborad");
    }
  return (
    <div>
      <h1>home</h1>

      <button onClick={handlClick}>click to move </button>
    </div>
  )
}

export default HomePage
