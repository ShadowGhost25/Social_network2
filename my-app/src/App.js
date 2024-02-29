// import s from './app.module.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from "./componets/Home/Home";
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';
import Profile from './componets/Profile/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );  
}

export default App;
