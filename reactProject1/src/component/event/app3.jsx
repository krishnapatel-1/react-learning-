import React from 'react'

const App3 = () => {

    function handleclick(){
        alert("i got clicked using function ")
    }
    function handleMouseHover(){
        alert("mouse hoverd  ")
    }


    function handleChange(event){
        console.log("input changed ", event.target.value)
    }
    function submitHandle(event){
         
        alert("form submitted ")
    }
  return (
    <div>
      {/* <button onClick={  ()=> alert("I got clicked ")} >click  me </button> */}
    
      {/* <button onClick={handleclick}>click me using function </button> */}
      {/* <p onMouseOver={handleMouseHover} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente porro quos autem provident eveniet facilis! Possimus dolor itaque tempore ad fugit, tenetur libero dolorem voluptas aperiam, perferendis voluptatibus culpa aliquam.</p> */}
    <form >
        
        <input type="text" onChange={handleChange} />
        <button type='submit' onClick={submitHandle}> submit</button>
        </form>  
    

    </div>
  )
}

export default App3
