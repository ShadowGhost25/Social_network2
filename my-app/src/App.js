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
import Music from './pages/Music/Music';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './redux/slices/login';

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(() =>{
    dispatch(fetchAuthMe())
  }, [])
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
        <Route path='/music' element={<Music />} />
      </Routes>
    </>
  );  
}

export default App;
