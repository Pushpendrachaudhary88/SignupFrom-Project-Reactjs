import React, { useState } from "react"
import './App.css';
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route,Routes } from "react-router-dom";

function App() {
  const[token,setToken] = useState("")


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Signup setToken={setToken} />}/>
        <Route path="/login" element={<Login setToken={token} />}/>


      </Routes>
      
     
    </div>
  );
}

export default App;
