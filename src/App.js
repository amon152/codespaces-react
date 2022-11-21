import { useState } from "react";
function App(){
  const [value, setValue]= useState(0)
  return(
    <>

    <h1>Counter App</h1>
    <h2>{value}</h2>
    <button className="btn" onClick={()=>setValue(value +1)}>increase</button>
    <button className="btn" onClick={()=>setValue(0)}>Reset</button>
    <button className="btn" onClick={()=>setValue(value -1)}>Decrease</button>
  
    
    </>
  );

}
export default App;