import { useSelector } from "react-redux";
import s from "./chat.module.css";
import { useState, useEffect } from "react";
import CustomButton from "../../componets/CustomButton/CustomButton";
import click from "../../pages/Message/img/click.png"
const Chat = ({ socket, room, username }) => {
  console.log(socket, room, username);
  const [value, setValue] = useState("");
  const { id, data } = useSelector((state) => state.login);

  const sendMessage = () => {
    const message = {
      roomId: room,
      text: value,
      timestamp: Date.now(),
      idUser: data.fullName,
    };
    socket.current.emit("sendMessage", message);
    setValue("");
  };
  return (
    <>
      <div className={s.blockMessage}>
        <div className={s.messageAll}>
          <div className={s.positionBlock}>
            <div>{/* <img src={ava} alt="ava friends" /> */}</div>
            <div className={s.messageBlock}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              iusto magnam deserunt, impedit perspiciatis laboriosam ullam.
              Provident, nesciunt nostrum! Asperiores possimus totam,
              consequuntur adipisci sint laudantium cumque impedit? Maxime,
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              suscipit atque doloremque quasi doloribus provident culpa itaque
              excepturi sequi, ab amet tempora recusandae modi nihil quidem,
              perspiciatis fuga. In, consequuntur? nulla.
            </div>
          </div>
        </div>
      </div>
      <div className={s.blockText}>
        <textarea
          placeholder="Написать сообщение..."
          className={s.inputText}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {/* <CustomButton typeStyle={"assessment"} click={sendMessage} /> */}
        <button className={s.click} onClick={sendMessage}>
          <img src={click} alt="button" />
        </button>
      </div>
    </>
  );
};

export default Chat;
