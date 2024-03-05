
import Header from "../../componets/Header/Header";
import { useDispatch, useSelector } from 'react-redux'
import History from "../../componets/History/History";
import Posts from "../../componets/Posts/Posts";
import s from "./home.module.css"
import axios from '../../axios'
import React from "react";
import { fetchPosts } from "../../redux/slices/posts";


const Home = () => {
  
  return (
    <div>
      <Header />
      <History />
      <div className={s.mainHome}>
        <Posts />
      </div>
    </div>
  );
}

export default Home;