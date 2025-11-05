import React, { useEffect } from "react";

const App4 = () => {
  const [count, setCount] = React.useState(0);
  const [totalcount, setTotalCount] = React.useState(1);
  //first-> side effect
  //second -> clean up if you want to clean up something after task done
  // third-> comma seperated dependancy array based on element someting  will update run the cod e

  function handleclick() {
    setCount(count + 1);
  }

  function someOtherFunction() {
    setTotalCount(totalcount + 1);
  }

  //variaton 1 run on every render

  //   useEffect(() => {
  //     alert("use effect called on every render ");
  //   });

  //variation 2 run only once on initial render
  //   useEffect(() => {
  //     alert("run only once on initial render ");
  //   }, []);

  //variation 3 run when count changes
  // useEffect(() => {
  //     alert("count changed  "+ count);
  //   }, [count]);

  //variation 4 multiple dependancy

  // useEffect(() => {
  //     alert("run for every change in count and  total count  "+ count + "  "+ totalcount);
  //   },[count,totalcount]);

  //   variation 5 clean up function

  useEffect(() => {
    alert("count changed  " + count);
    return () => {
      alert("clean up function called for count " + count);
    };
  }, [count]);

  return (
    <div>
      <button onClick={handleclick}>click me </button>
      <br />
      count:{count}
      <br />
      <button onClick={someOtherFunction}>click me </button>
      <br />
      totalcount:{totalcount}
    </div>
  );
};

export default App4;
