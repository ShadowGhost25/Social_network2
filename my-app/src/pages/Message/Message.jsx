import React from "react";
import Header from "../../componets/Header/Header";
import s from "./message.module.css";
import ava from "./img/ava.png";
import Search from "../../componets/Search/Search";
import click from "./img/click.png";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth } from "../../redux/slices/login";
import { useRef, useEffect, useState } from "react";
import {
  fetchJoinRoom,
  fetchMessage,
  fetchUser,
} from "../../redux/slices/user";
import moment from "moment";
import io from "socket.io-client";
import Loading from "../../componets/Loading/Loading";
import { Navigate } from "react-router-dom";

const Message = () => {
  const [showChat, setShowChat] = useState(false);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const { id, data } = useSelector((state) => state.login);
  const dataUser = useSelector((state) => state.user);
  const room = useSelector((state) => state.user.room);
  const [messages, setMessages] = useState([]);
  const socket = useRef();
  const messagesEndRef = useRef();
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch();
  const isUserLoading = dataUser.status === "loaded";
  useEffect(() => {
    // socket.current = io("https://social-network2.vercel.app", {
    socket.current = io("http://localhost:3002", {
      reconnectionAttempts: Infinity, // Количество попыток переподключения
      reconnectionDelay: 1000, // Задержка перед следующей попыткой переподключения
      reconnectionDelayMax: 5000, // Максимальная задержка перед переподключением
      timeout: 20000, // Таймаут подключения в миллисекундах (по умолчанию 20000)
      transports: ["websocket"], // Использовать только WebSocket транспорт
      pingTimeout: 60000, // Таймаут пинга
      pingInterval: 25000, // Интервал пинга
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
  }, [data, dispatch]);

  useEffect(() => {
    socket.current.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });
  }, [setValue]);

  const joinRoom = (friend) => {
    const params = {
      friendId: friend._id,
      meId: id,
    };
    const fullNameSurName = friend.fullName + " " + friend.surName;

    if (room) {
      setMessages(room.historyMessage);
    }
    setName(fullNameSurName);
    dispatch(fetchJoinRoom(params));
  };
  useEffect(() => {
    if (room) {
      setMessages(room.historyMessage);
    }
  }, [room]);
  useEffect(() => {
    if (room && room.roomId) {
      socket.current.emit("join", {
        roomId: room.roomId,
        userName: data.fullName,
      });
      setShowChat(true);
    }
  }, [room, data]);

  const sendMessage = (e) => {
    const message = {
      roomId: room.roomId,
      meId: id,
      text: value,
      timestamp: new Date().toISOString(),
      idUser: data.fullName,
    };
    dispatch(fetchMessage(message));
    socket.current.emit("message", message);
    scrollToBottom();
    setValue("");
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); // Плавная прокрутка вниз
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }
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
                {data.friend.length === 0 && (
                  <span className={s.invitation}>У вас пока нет друзей</span>
                )}
                {dataUser.data.map(
                  (friend) =>
                    friend.fullName && (
                      <div
                        key={friend._id} // добавляем уникальный ключ для каждого друга
                        onClick={() => {
                          joinRoom(friend);
                        }}
                        className={s.positionBlockUser}
                      >
                        <img
                          className={s.imgStyle}
                          src={ava}
                          alt="ava friends"
                        />
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
                    )
                )}
              </div>
              <div className={s.messageFriends}>
                {showChat ? (
                  <>
                    <div className={s.friends}>
                      <div className={s.positionBlock}>
                        <img src={ava} alt="ava user" />
                        <div className={s.positionBlockName}>
                          <span className={s.nameFriends}>{name}</span>
                          <div className={s.positionBlockStatus}>
                            <span className={s.statusFriends}> Online </span>
                            <div className={s.ellips}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={s.messageAll}>
                      {messages.map((message, index) => (
                        <>
                          {id === message.meId ? (
                            <div key={index} className={s.positionBlockMe}>
                              <div>
                                <div className={s.positionBlockStatus}>
                                  <span className={s.nameFriends}>
                                    {message.idUser}
                                  </span>
                                </div>
                                <img
                                  className={s.img}
                                  src={ava}
                                  alt="ava friends"
                                />
                              </div>
                              <div className={s.messageBlock}>
                                {message.text}
                                <span className={s.time}>
                                  {moment(message.timestamp)
                                    .locale("ru")
                                    .fromNow()}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className={s.positionBlock}>
                              <div>
                                <div className={s.positionBlockStatus}>
                                  <span className={s.nameFriends}>
                                    {message.idUser}
                                  </span>
                                </div>
                                <img
                                  className={s.img}
                                  src={ava}
                                  alt="ava friends"
                                />
                              </div>
                              <div className={s.messageBlock}>
                                {message.text}
                                <span className={s.time}>
                                  {moment(message.timestamp)
                                    .locale("ru")
                                    .fromNow()}
                                </span>
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>
                    <div className={s.blockText}>
                      <input
                        placeholder="Написать сообщение..."
                        className={s.inputText}
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <button className={s.click} onClick={sendMessage}>
                        <img src={click} alt="button" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className={s.text}>
                    <div className={s.border}>
                      <h3>Выберите чат</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Message;
