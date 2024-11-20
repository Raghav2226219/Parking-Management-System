import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Fotter from './Components/Fotter'
import SignUp from './Components/SignUp'
import ParkingSpace from './Components/ParkingSpace';
import Wallet from './Components/Wallet';
import React, { useEffect, useState } from "react";
import Login from './Components/Login';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);





  return (
    
    <div className="App">
      <h1>{message}</h1>
     <Navbar/>
     <SignUp/>
     <Login/>
     <ParkingSpace/>
     <Wallet/>
     <Fotter/>
    </div>
    
  );
}

export default App;
