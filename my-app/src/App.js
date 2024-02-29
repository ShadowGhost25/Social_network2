// import s from './app.module.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Profile from './componets/Profile/Profile';
import Message from './pages/Message/Message';
import Home from './pages/Home/Home';
import Group from './pages/Group/Group';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Friends from './pages/Friends/Friends';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/message" element={<Message />} />
        <Route path="/group" element={<Group />} />
        <Route path='/friends' element={<Friends />} />
      </Routes>
    </>
  );  
}

export default App;
