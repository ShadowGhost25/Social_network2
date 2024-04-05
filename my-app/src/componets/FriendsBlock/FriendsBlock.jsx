import ava from "./img/ava.png";
import s from "./friendsblock.module.css";
import CustomButton from "../CustomButton/CustomButton";
const FriendsBLock = () => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}></div>
      <img className={s.ava} src={ava} alt="ava" />
      <div className={s.displayFriends}>
        <h3 className={s.name}>Саша Тарасов1</h3>
        <span>
          Пензенский колледж информационных и промышленных технологий
          (ИТ-колледж)
        </span>
      </div>
      <div className={s.center}>

      <CustomButton title="Написать" typeStyle="primary" size="small"/>
      </div>
    </div>
  );
};

export default FriendsBLock;
