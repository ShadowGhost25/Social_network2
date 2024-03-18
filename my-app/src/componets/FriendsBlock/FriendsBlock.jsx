import ava from './img/ava.png'
import s from './friendsblock.module.css'
const FriendsBLock = () => {
    return (
        <div className={s.card}>
            <div className={s.cardHeader}></div>
            <img className={s.ava} src={ava} alt="" />
            <div style={{padding: "10px"}}>
                <h3 className={s.name}>Саша Тарасов1</h3>
                <span>Пензенский колледж информационных и промышленных технологий (ИТ-колледж)</span>
            </div>
            test
            <button className={s.button2}>Написать</button>
        </div>
    );
}

export default FriendsBLock;