
import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './pages/SignIn';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default App;
