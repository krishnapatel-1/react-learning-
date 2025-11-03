import React, { useState } from "react";
import LoggedOut from "./loggedout";
import LoggedIn from "./loggedin";
const ConditionalRender = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
//if else condition 
  // if (isLoggedIn) {
  //   return <LoggedOut />;
  // } else return <LoggedIn />;


  //ternary operator
  // return <div>{isLoggedIn ? <LoggedOut /> : <LoggedIn />}</div>;
 
   //logical operation 
  // return (
  //   <div>
  //     <h1>welcom every one to webdev  code </h1>
  //    <div>
  //     {isLoggedIn&& <LoggedOut /> }
  //    </div>
  //   </div>
  // )


  //early rendering 

  if(!isLoggedIn){return( <LoggedIn/>)}


  return (
    <div> {isLoggedIn&&<LoggedOut/>}</div>
  )
};

export default ConditionalRender;
