import React from 'react'
import { useContext } from 'react'
import { MyContext } from './app5' 
const Child3 = () => {
  const data = useContext(MyContext)
  return (
    <div>
    Name  :{data.name}
    <h1>hello ji </h1>
    </div>
  )
}

export default Child3
