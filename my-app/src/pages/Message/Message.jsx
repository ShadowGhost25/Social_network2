import React from "react";
import Header from "../../componets/Header/Header";
import s from "./message.module.css";
import ava from "./img/ava.png";
import Search from "../../componets/Search/Search";
import FriendsOnline from "../../componets/FriendsOnline/FriendsOnline";

const Message = () => {
  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.mainMessage}>
          <div className={s.userFriends}>
            <Search />
            <div className={s.positionBlock}>
              <img src={ava} alt="no img" />
              <div className={s.positionBlockName}>
                <span className={s.nameFriends}>Илья Вавилин</span>
                <div className={s.positionBlockStatus}>
                  <span className={s.statusFriends}> Online </span>
                  <div className={s.ellips}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={s.messageFriends}></div>
        </div>
      </div>
    </>
  );
};

export default Message;
