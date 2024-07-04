import { useState } from "react";

function App() {
const [name,setName] = useState('Felix');
const [age,setAge] = useState(23);
const [password,setPassword] = useState('Maravilha2020@');
const [todos,setTodos] = useState('')

function handleClick(){
  setName('Mavila')
  setAge(()=>
     age + 3)
  if(age===29){
  return;
  }
}
  return (
    <><h2>{age}</h2><h1>{name}</h1><button onClick={handleClick}>Click
    </button></>
  );
}

export default App;
