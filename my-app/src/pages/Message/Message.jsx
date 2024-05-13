import React from "react";
import Header from "../../componets/Header/Header";
import s from "./message.module.css";
import ava from "./img/ava.png";
import Search from "../../componets/Search/Search";
import click from "./img/click.png";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/login";
import { useRef, useEffect, useState } from "react";
import io from "socket.io-client";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [connected, setConnected] = useState(false);
  const [roomId, setRoomId] = useState("");
  const socket = useRef();
  const isAuth = useSelector(selectIsAuth);
  const { id, data } = useSelector((state) => state.login);

  useEffect(() => {
    socket.current = io("http://localhost:3002"); // Подключение к серверу Socket.io

    socket.current.on("connect", () => {
      setConnected(true);
    });

    socket.current.on("message", (message) => {
      console.log(message)
      setMessages((prev) => [...prev, message]); // Добавляем новое сообщение в конец массива
    });
    
    return () => {
      socket.current.disconnect(); // Отключение от сервера при размонтировании компонента
    };
  }, []);
  const joinRoom = (roomId) => {
    // Отправляем на сервер запрос на присоединение к комнате с указанным ID
    socket.current.emit("join", { roomId, userId: data.fullName }); // Замените "yourUserId" на актуальный идентификатор пользователя
    setRoomId(roomId); // Сохраняем ID комнаты в состоянии
  };
  const sendMessage = () => {
    const message = {
      text: value,
      timestamp: Date.now(),
      idUser: data.fullName,
    };
    socket.current.emit("sendMessage", message);
    setValue("");
  };
  // console.log(messages)
  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.mainMessage}>
          <div className={s.userFriends}>
            <div className={s.blockSearch}>
              <Search />
            </div>
            <div onClick={() => joinRoom(1)} className={s.positionBlock}>
              <img className={s.imgStyle} src={ava} alt="ava friends" />
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
            </div>
          </div>
          <div className={s.messageFriends}>
            <div className={s.friends}>
              <div className={s.positionBlock}>
                <img src={ava} alt="ava user" />
                <div className={s.positionBlockName}>
                  <span className={s.nameFriends}>Илья Вавилин</span>
                  <div className={s.positionBlockStatus}>
                    <span className={s.statusFriends}> Online </span>
                    <div className={s.ellips}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.blockMessage}>
              <div className={s.messageAll}>
                {messages.map((mess) => {
                  return (
                    <div key={mess.id} className={s.positionBlockMe}>
                      <div>
                        <img src={ava} alt="ava me" />
                      </div>
                      <div className={s.messageBlock}>{mess.message}</div>
                    </div>
                  );
                })}
                <div className={s.positionBlock}>
                  <div>
                    <img src={ava} alt="ava friends" />
                  </div>
                  <div className={s.messageBlock}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde iusto magnam deserunt, impedit perspiciatis laboriosam
                    ullam. Provident, nesciunt nostrum! Asperiores possimus
                    totam, consequuntur adipisci sint laudantium cumque impedit?
                    Maxime, Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Ducimus suscipit atque doloremque quasi doloribus
                    provident culpa itaque excepturi sequi, ab amet tempora
                    recusandae modi nihil quidem, perspiciatis fuga. In,
                    consequuntur? nulla.
                  </div>
                </div>
              </div>
            </div>
            <div className={s.blockText}>
              <textarea
                placeholder="Type..."
                className={s.inputText}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className={s.click} onClick={sendMessage}>
                <img src={click} alt="button" />
              </button>
            </div>
          </div>
        </div>
        <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.text}</div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Message;
