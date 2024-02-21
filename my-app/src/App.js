import s from './app.module.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from "./componets/Home/Home";
import Login from './componets/Login/Login';
import Register from './componets/Register/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );  
}

export default App;
