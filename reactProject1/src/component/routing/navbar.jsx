import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navbar.css"
const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/" className={({isActive})=>isActive?"active-link":""} >Home</NavLink>
            </li>
            <li>
                <NavLink to="/about"className={({isActive})=>isActive?"active-link":""} >About</NavLink>
            </li>
            <li>
                <NavLink to="/dashborad" className={({isActive})=>isActive?"active-link":""} >Dashbord</NavLink>
            </li>
            
        </ul>
      
    </div>
  )
}

export default Navbar
