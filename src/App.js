import React from 'react';
import './App.css';
import Navigation from './Navigation'
import Login from './Login/Login';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Navigation/>
        {/* <Login/> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
