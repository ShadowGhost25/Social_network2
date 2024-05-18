import React from "react";
import Header from "../../componets/Header/Header";
import s from "./message.module.css";
import ava from "./img/ava.png";
import Search from "../../componets/Search/Search";
import click from "./img/click.png";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth } from "../../redux/slices/login";
import { useRef, useEffect, useState } from "react";
import { fetchJoinRoom, fetchUser } from "../../redux/slices/user";
import io from "socket.io-client";
import Chat from "./Chat";
import axios from "../../axios";
import Loading from "../../componets/Loading/Loading";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [connected, setConnected] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [showChat, setShowChat] = useState(false);
  const { id, data } = useSelector((state) => state.login);
  const dataUser = useSelector((state) => state.user);
  const socket = useRef();
  const dispatch = useDispatch();
  const isUserLoading = dataUser.status === "loaded";

  useEffect(() => {
    socket.current = io("http://localhost:3002", {
      reconnectionAttempts: Infinity, // Количество попыток переподключения
      reconnectionDelay: 1000, // Задержка перед следующей попыткой переподключения
      reconnectionDelayMax: 5000, // Максимальная задержка перед переподключением
      timeout: 20000, // Таймаут подключения в миллисекундах (по умолчанию 20000)
      transports: ["websocket"], // Использовать только WebSocket транспорт
      pingTimeout: 60000, // Таймаут пинга
      pingInterval: 25000, // Интервал пинга
    });

    socket.current.on("message", (message) => {
      setMessages((prev) => [...prev, message.text]);
    });

    socket.current.on("connect_error", (error) => {
      console.error("Connection error:", error);
    });

    return () => {
      socket.current.disconnect(); // Отключение от сервера при размонтировании компонента
    };
  }, []);

  useEffect(() => {
    if (data !== null) {
      dispatch(fetchUser(data.friend));
    }
  }, [data]);

  const joinRoom = async () => {
    dispatch(fetchJoinRoom(id));
    console.log("roomId:", dataUser.dataId.data.roomId);
    console.log("userName:", data.fullName);
    // socket.current.emit("join", {
    //   roomId: dataUser.dataId.data.roomId,
    //   userName: data.fullName,
    // });
    // setShowChat(true);
    setRoomId(dataUser.dataId.data.roomId);
  };

  return (
    <>
      {!isUserLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className={s.main}>
            <div className={s.mainMessage}>
              <div className={s.userFriends}>
                <div className={s.blockSearch}>
                  <Search />
                </div>
                {dataUser.data.map((friend) => (
                  <div
                    key={friend._id} // добавляем уникальный ключ для каждого друга
                    onClick={joinRoom}
                    className={s.positionBlockUser}
                  >
                    <img className={s.imgStyle} src={ava} alt="ava friends" />
                    <div className={s.displayBlock}>
                      <div className={s.positionBlockName}>
                        <div className={s.positionBlockStatus}>
                          <span className={s.nameFriends}>
                            {friend.fullName} {friend.surName}
                          </span>
                          <div className={s.ellips}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                    <span>{message.userName}: </span>
                  </div>
                ))}
                {/* {showChat && (
                  <Chat
                    username={data.fullName}
                    room={roomId}
                    socket={socket}
                  />
                )} */}
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                />
              </div>
            </div>
            <div></div>
          </div>
        </>
      )}
    </>
  );
};

export default Message;
