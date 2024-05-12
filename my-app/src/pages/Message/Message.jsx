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
  const [messages, setMessage] = useState([]);
  const [value, setValue] = useState(""); // Состояние для хранения текста сообщения
  const [connected, setConnected] = useState(false);
  const socket = useRef(); // Ссылка на объект WebSocket
  const isAuth = useSelector(selectIsAuth);
  const { id, data } = useSelector((state) => state.login);
  const soketIo = io.connect("http://localhost:3002");
  const clickRoom = () => {
    const room = {
      idRoom: 1,
      idUser: data.fullName,
    };
    soketIo.emit("join", room);
  };
  useEffect(() => {
    // socket.current = new WebSocket("ws://localhost:3002/ws"); // Создание WebSocket при монтировании компонента
    // // Обработчики событий WebSocket
    // socket.current.onopen = () => {
    //   setConnected(true);
    //   const message = {
    //     event: "connection",
    //     id: Date.now,
    //   };
    //   socket.current.send(JSON.stringify(message));
    //   console.log("Подключено к серверу WebSocket");
    // };
    // socket.current.onmessage = (event) => {
    //   const message = JSON.parse(event.data);
    //   setMessage((prev) => [message, ...prev]);
    // };
    // socket.current.onclose = () => {
    //   console.log("Соединение с сервером WebSocket закрыто");
    // };
    // socket.current.onerror = (error) => {
    //   console.error("Ошибка WebSocket соединения:", error.message);
    // };
    // // Отключение WebSocket при размонтировании компонента
    // return () => {
    //   socket.current.close();
    // };
  }, []);

  const sendMessage = () => {
    const message = {
      message: value,
      id: Date.now(),
      event: "message",
      idUser: id,
    };
    // socket.current.send(JSON.stringify(message));
    setValue("");
  };
  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.mainMessage}>
          <div className={s.userFriends}>
            <div className={s.blockSearch}>
              <Search />
            </div>
            <div onClick={clickRoom} className={s.positionBlock}>
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
      </div>
    </>
  );
};

export default Message;
