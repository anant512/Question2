import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text,setText]=useState("");
  const [result,setResult]=useState(text)
const handleChange=(event)=>{
  
    setText(event.target.value)  
}
const handleClick=()=>{
    setResult(text);
    setText('')
  
    
}
  return (
    <div className="App">
      <div>
      <h1 className='head'>{result}</h1>
      <input className='input'  value={text} onChange={handleChange} placeholder='Enter your text here' ></input>
      
      <button className='button' onClick={handleClick}>Add Text</button>
      </div>
    </div>
  );
}

export default App;
