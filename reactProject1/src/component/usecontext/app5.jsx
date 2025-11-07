import React from 'react'
import Child1 from './child1'



//step 1 crete context 
const MyContext = React.createContext() 

//step 2 provide context value  
// wrap the component with provider
// consume the value  usinf useContext hook in child component

// pass as object 

 
const App5 = () => {
      const [user ,setUser] = React.useState({name:"John Doe"});

  return (

    <div>
      

      <MyContext.Provider value={user}>
        <Child1 />
      </MyContext.Provider>
    
    </div>
  )
}

export default App5
export {MyContext};
