import React from "react";
import Header from "../../componets/Header/Header";
import s from "./message.module.css";
import ava from "./img/ava.png";
import Search from "../../componets/Search/Search";
import click from "./img/click.png";

const Message = () => {
  const userFriendsElements = [];
  for (let i = 0; i < 10; i++) {
    userFriendsElements.push(
      <div key={i} className={s.positionBlock}>
        <img className={s.imgStyle} src={ava} alt="no img" />
        <div className={s.displayBlock}>
          <div className={s.positionBlockName}>
            <div className={s.positionBlockStatus}>
              <span className={s.nameFriends}>Илья Вавилин</span>
              <div className={s.ellips}></div>
            </div>
            <span className={s.statusFriends}>Вы: прикольно</span>
          </div>
          <div className={s.time}>15:12</div>
        </div>
      </div>,
      <hr key={`hr-${i}`} className={s.hr} /> //`hr-${i}` такое обозночение нужно что бы ключи не совподали, в данном примере не совподали с <div key={i} className={s.positionBlock}>
    );
  }
  const messageFriendsElements = [];
  for (let i = 0; i < 10; i++) {
    messageFriendsElements.push(
      <div key={i} className={s.positionBlockMe}>
      <div>
        <img src={ava} alt="no img" />
      </div>
      <div className={s.messageBlock}>Lorem ipsum</div>
    </div>
    );
  }

  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.mainMessage}>
          <div className={s.userFriends}>
            <Search />
            {userFriendsElements}
          </div>
          <div className={s.messageFriends}>
            <div className={s.friends}>
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
              <div className={s.blockText}>
            <div className={s.messageAll}>
              <div className={s.positionBlock}>
                <div>
                  <img src={ava} alt="no img" />
                </div>
                <div className={s.messageBlock}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iusto magnam deserunt, impedit perspiciatis laboriosam ullam.
                  Provident, nesciunt nostrum! Asperiores possimus totam,
                  consequuntur adipisci sint laudantium cumque impedit? Maxime,
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus suscipit atque doloremque quasi doloribus provident
                  culpa itaque excepturi sequi, ab amet tempora recusandae modi
                  nihil quidem, perspiciatis fuga. In, consequuntur? nulla.
                </div>
              </div>
              {messageFriendsElements}
            </div>
                <input
                  placeholder="Type..."
                  className={s.inputText}
                  type="text"
                />
                <button className={s.click}>
                  <img src={click} alt="" />
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
