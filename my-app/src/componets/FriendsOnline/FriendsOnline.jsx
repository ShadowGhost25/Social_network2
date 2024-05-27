import alex from "../../pages/Profile/img/alex.png";
import ellipse from "../../pages/Profile/img/Ellipse 6.png";
import s from "./friendsonline.module.css";
import { selectIsAuth } from "../../redux/slices/login";
import { useSelector } from "react-redux";

const FriendsOnline = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className={s.mainFriends}>
      <h3 className={s.h3Foto}>Друзья онлайн</h3>
      <hr />
      {!isAuth ? (
        <div className={s.style}>У вас нет друзей :(</div>
      ) : (
        <>
          <div className={s.friends}>
            <img className={s.test} src={alex} alt="ava" />
            <span className={s.friendsName}>Саша</span>
            <img className={s.ellipse} src={ellipse} alt="online" />
          </div>
        </>
      )}
    </div>
  );
};

export default FriendsOnline;
