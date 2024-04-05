import { useSelector } from "react-redux";
import Header from "../../componets/Header/Header";
import History from "../../componets/History/History";
import foto from "./img/qwe.png";
import s from "./home.module.css";
import React from "react";
import Posts from "./../../componets/Posts/Posts";
import FriendsOnline from "../../componets/FriendsOnline/FriendsOnline";
import GroupNotification from "../../componets/GroupNotification/GroupNotification";
import CustomButton from "../../componets/CustomButton/CustomButton";

const Home = () => {
  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.leftBlock}>
          <div className={s.background}></div>
          <img className={s.fotoProfile} src={foto} alt="no img" />
          <span className={s.name}>Илья Вавилин</span>
          <span className={s.status}>Статус</span>
          <hr />
          <span className={s.friends}>Друзья</span>
          <span className={s.kolFriends}>14</span>
          <hr />
          <CustomButton title="Профиль" typeStyle="primary" />
        </div>
        <div className={s.mainBlock}>
          <History />
          <div className={s.postsMain}>
            <Posts />
          </div>
        </div>
        <div className={s.rightBlock}>
          <FriendsOnline />
          <GroupNotification />
        </div>
      </div>
    </>
  );
};

export default Home;
