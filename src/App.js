import logo from './logo.svg';
import './App.css';

import { initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]= useState({});
  const handleInput =(event)=>{
    let newInput ={[event.target.name]:event.target.value};
    setData({...data,...newInput});
  }
  const addData =()=>{
    signInWithEmailAndPassword(auth.data.email,data.password)
  };
  const handlelogout =()=>{
    signOut(auth);
  }
  useEffect(()=>{
onAuthStateChanged(auth,(data)=>{
  if(data){
    alert("Logged In")
  }
  else{
    alert("Not Logged in")
  }
})
  },[])
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
    <button onClick={addData}>Log In</button>
    <button onClick={handlelogout}>Log out</button>
    </div>
  );
}

export default App;
