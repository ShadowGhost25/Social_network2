import ava from "./img/ava.png";
import s from "./friendsblock.module.css";
import CustomButton from "../CustomButton/CustomButton";
const FriendsBLock = () => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}></div>
      <img className={s.ava} src={ava} alt="no img" />
      <div className={s.displayFriends}>
        <h3 className={s.name}>Саша Тарасов1</h3>
        <span>
          Пензенский колледж информационных и промышленных технологий
          (ИТ-колледж)
        </span>
      </div>
      <CustomButton title="Написать" typeStyle="primary" />
    </div>
  );
};

export default FriendsBLock;
