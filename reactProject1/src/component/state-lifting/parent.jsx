import React, { useState } from 'react'
import Child from './child'

const Parent = () => {
    const [show, setShow] = useState(false);   
  return (
    <div>
   <Child heading={"About"} text={"this is about section"}  show={show===0} setShow={() => setShow(0)} />
   <Child heading={"Main"} text={"this is main section"} show={show===1} setShow={() => setShow(1)} />
     
   

    </div>
  )
}

export default Parent
