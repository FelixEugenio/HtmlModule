import { useEffect, useState } from "react";

function App() {
const [counter,setCounter] = useState(0);


useEffect(()=>{

},[])
  return (
    <div>
      <h1> contador : {counter}</h1>
      <button onClick={()=> setCounter(counter+1)}>+</button>
    </div>
  );
}

export default App;
