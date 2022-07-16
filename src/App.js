import logo from './logo.svg';
import './App.css';
import { initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import {app} from './firebaseConfig'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"

function App() {
  const auth =getAuth();
  const [data,setData]= useState({});
  const handleInput =(event)=>{
    let newInput ={[event.target.name]:event.target.value};
    setData({...data,...newInput});
  }

  const handleSubmit =()=>{
    sign
  }
  
  // const addData =()=>{
  //   signInWithEmailAndPassword(auth.data.email,data.password)
  // };
  // const handlelogout =()=>{
  //   signOut(auth); 
  // }
//   useEffect(()=>{
// onAuthStateChanged(auth,(data)=>{
//   if(data){
//     alert("Logged In")
//   }
//   else{
//     alert("Not Logged in")
//   }
// })
//   },[])
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
      <button onClick={handleSubmit}>Submit</button>
    {/* <button onClick={addData}>Log In</button> */}
    {/* <button onClick={handlelogout}>Log out</button> */}
    </div>
  );
}

export default App;
