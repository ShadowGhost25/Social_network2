import Header from "../../componets/Header/Header";
import s from "./message.module.css";
import ava from "./img/ava.png";
import { useDispatch } from "react-redux";
import React from "react";
import { fetchAuthMe } from "../../redux/slices/login";

const Message = () => {


    return (
        <>
            <Header />
            <div className={s.main}>
              <div className={s.mainMessage}>
                re
              </div>
            </div>
        </>
    );
}

export default Message;