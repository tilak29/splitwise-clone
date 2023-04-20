import React from 'react';
import './App.css';
import Home from './pages/home/home';
import SignUp from './pages/signup/Signup';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import { Routes, Route } from "react-router-dom"



function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/signup" element={ <SignUp/> } /> 
    <Route path='/login' element={ <Login/> } />
    <Route path='/dashboard' element={ <Dashboard/> } /> 
      </Routes>
    </>
  );
}

export default App;
