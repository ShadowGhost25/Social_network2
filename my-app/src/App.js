// import s from './app.module.css'
import React from 'react';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
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
import FullPosts from './componets/Posts/FullPosts/FullPosts';
import AddPosts from './pages/AddPosts/AddPosts';

function App() {
  const dispatch = useDispatch()
  const {state} = useLocation()
  // const {data} = useLocation()
  console.log(state)
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
        <Route path='/posts/:id' element={<FullPosts state={state}/>} />
        <Route path='/add-posts' element={<AddPosts />} />
      </Routes>
    </>
  );  
}

export default App;
