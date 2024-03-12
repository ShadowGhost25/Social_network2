
import Header from "../../componets/Header/Header";
import History from "../../componets/History/History";
import Posts from "../../componets/Posts/Posts";
import s from "./home.module.css"
import React from "react";

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