import React from "react";
import { useState} from "react";

function App() {
  const[count, setCount]= useState(0);
  return (
    <div>
    
     <h1>The count was : {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <button onClick={()=>{setCount(count-1)}}>decrease</button>
    </div>

  );
}

export default App;
