import foto from "./img/qwe.png";
import alex from "../../pages/Profile/img/alex.png";
import ellipse from "../../pages/Profile/img/Ellipse 6.png";
import s from "./friendsonline.module.css";
const FriendsOnline = () => {
  return (
    <div className={s.mainFriends}>
      <h3 className={s.h3Foto}>Друзья онлайн</h3>
      <hr />
      <div className={s.friends}>
        <img className={s.test} src={alex} alt="no img" />
        <span className={s.friendsName}>Саша</span>
        <img className={s.ellipse} src={ellipse} alt="no img" />
      </div>
    </div>
  );
};

export default FriendsOnline;
