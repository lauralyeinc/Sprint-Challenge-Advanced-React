import React from 'react';
// import './App.css';
import "./components/styles.scss"; 

import Fetch from "./components/Fetch"; 
import Nav from "./components/Nav"; 

function App() { 
  return (
    <div className="App">
    <Nav />
    <Fetch />
    </div>
  );
}

export default App;
