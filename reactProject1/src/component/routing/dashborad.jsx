import React from 'react'
import { Outlet } from 'react-router-dom' 
const DashboradPage = () => {
  return (
    <div>
      <h1>dashborad</h1>
      <Outlet/>
    </div>
  )
}

export default DashboradPage
