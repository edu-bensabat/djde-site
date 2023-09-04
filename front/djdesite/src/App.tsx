<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './pages/Home/SignIn';

function App() {
  return (
    <div>
      <SignIn></SignIn>
    </div>
=======
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Games from "./pages/Games";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Games />
    </>
>>>>>>> 928c6f0c3a17fe18977c42642333cb689d2dbc50
  );
}

export default App;
