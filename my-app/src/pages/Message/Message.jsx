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
import Chat from "./Chat";
import axios from "../../axios";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [roomId, setRoomId] = useState("");
  const socket = useRef();
  const isAuth = useSelector(selectIsAuth);
  const [showChat, setShowChat] = useState(false);

  const { id, data } = useSelector((state) => state.login);
  useEffect(() => {
    socket.current = io("http://localhost:3002"); // Подключение к серверу Socket.io
    // console.log(socket.current.io)
    socket.current.on("connect", () => {
      setConnected(true);
    });
    socket.current.on(
      "message",
      (message) => {
        setMessages((prev) => [...prev, message.text]);
      },
      (error) => {
        console.error("Ошибка при получении сообщения:", error);
      }
    );

    return () => {
      socket.current.disconnect(); // Отключение от сервера при размонтировании компонента
    };
  }, []);
  const joinRoom = async () => {
    const dataId = await axios.post("/roomId", { id: id });
    socket.current.emit("join", {
      roomId: dataId.data.roomId,
      userName: data.fullName,
    }); // Замените "yourUserId" на актуальный идентификатор пользователя
    setShowChat(true);
    setRoomId(dataId.data.roomId); // Сохраняем ID комнаты в состоянии
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
            <div onClick={() => joinRoom()} className={s.positionBlock}>
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
            <div onClick={() => joinRoom()} className={s.positionBlock}>
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
            {messages.map((message, index) => (
              <div key={index} className={s.message}>
                {/* {console.log(message)} */}
                <span>{message.userName}: </span>
              </div>
            ))}
            {showChat && <Chat username={data.fullName} room={roomId} socket={socket} />}

          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Message;
