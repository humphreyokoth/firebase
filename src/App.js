import logo from './logo.svg';
import './App.css';

import { initializeApp } from 'firebase/app';
import { useState } from 'react';

function App() {
  const [data,setData]= useState({});
  const handleInput =(event)=>{
    let newInput ={[event.target.name]:event.target.value};
    setData({...data,...newInput});
  }
  const handleSubmit =()=>{};
  return (
    <div className="App">
    <input
      name='email'
      placeholder='Email'
      onChange={(event)=>handleInput(event)}

    />
    <input
      name='password'
      placeholder='Password'
      onChange={(event)=>handleInput(event)}
    />
     
    </div>
  );
}

export default App;
