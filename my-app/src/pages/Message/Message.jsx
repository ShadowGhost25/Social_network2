import Header from "../../componets/Header/Header";
import s from "./message.module.css";
import ava from "./img/ava.png";

const Message = () => {
    return (
        <>
            <Header />
            <div className={s.mainMessage}>
                <div className={s.mainFriends}>
                    <div className={s.headerMessage}></div>
                    <div className={s.foterMessage}>
                        <div className={s.img}>
                            <img className={s} src={ava} alt="no img" />
                        </div>
                        <div className={s.textMessage}>
                            <h3 className={s.h3}>Саша Тарасов</h3>
                            <span>Вы: Прикольно</span>
                        </div>
                            <span>15:23</span>
                    </div>
                </div>
            </div>
            <div className={s.mainMessage}>
                <div className={s.mainFriends}>
                    <div className={s.headerMessage}></div>
                    <div className={s.foterMessage}>
                        <div className={s.img}>
                            <img className={s} src={ava} alt="no img" />
                        </div>
                        <div className={s.textMessage}>
                            <h3 className={s.h3}>Саша Тарасов</h3>
                            <span>Вы: Прикольно</span>
                        </div>
                            <span>15:23</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;