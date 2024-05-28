import ava from "./img/ava.png";
import s from "./allfriends.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { fetchAddFriends } from "../../redux/slices/friends";
import { useNavigate } from "react-router-dom";
const AllFriends = ({ data, userMeId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addFriends = (userFriendId, userMeId) => {
    const params = {
      userFriendId,
      userMeId,
    };
    dispatch(fetchAddFriends(params));
    window.location.reload();
  };
  const filteredUsers = data.filter(
    (user) =>
      !user.subscription.includes(userMeId) &&
      !user.subscriber.includes(userMeId) &&
      !user.friend.includes(userMeId)
  );
  const subscribers = data.filter((user) => user.subscriber.includes(userMeId));
  const subscription = data.filter((user) =>
    user.subscription.includes(userMeId)
  );
  const cliсkMe = (userId) => {
    navigate(`/profile/${userId}`);
  };
  return (
    <>
      <span className={s.friendsText}>Искать друзей</span>
      <div className={s.cardBlog}>
        {filteredUsers.map((friends, index) => {
          return (
            <>
              <div
                onClick={() => cliсkMe(friends._id)}
                key={index}
                className={s.card}
              >
                <div className={s.cardHeader}></div>
                <img className={s.ava} src={ava} alt="ava" />
                <div className={s.displayFriends}>
                  <h3 className={s.name}>
                    {friends.fullName} {friends.surName}
                  </h3>
                </div>
                <div className={s.center}>
                  <CustomButton
                    click={() => addFriends(friends._id, userMeId)}
                    title="Добавить в друзья"
                    typeStyle="primary"
                    size="average"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>

      <span className={s.friendsText}>Запросы в друзья</span>
      <div className={s.cardBlog}>
        {subscription.map((friends, index) => {
          return (
            <div key={index} className={s.card}>
              <div className={s.cardHeader}></div>
              <img className={s.ava} src={ava} alt="ava" />
              <div className={s.displayFriends}>
                <h3 className={s.name}>
                  {friends.fullName} {friends.surName}
                </h3>
              </div>
              {friends.subscription.includes(userMeId) && (
                <div className={s.center}>
                  <CustomButton
                    click={() => addFriends(friends._id, userMeId)}
                    title="Добавить в друзья"
                    typeStyle="primary"
                    size="average"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {subscription.length === 0 && (
        <span className={s.invitation}>
          У вас пока нет приглашений в друзья
        </span>
      )}
      <span className={s.friendsText}>Ваши запросы кому-то в друзья</span>
      <div className={s.cardBlog}>
        {/* <span className={s.friendsText}>Поиск друзей</span> */}

        {subscribers.map((friends, index) => {
          return (
            <div key={index} className={s.card}>
              <div className={s.cardHeader}></div>
              <img className={s.ava} src={ava} alt="ava" />
              <div className={s.displayFriends}>
                <h3 className={s.name}>
                  {friends.fullName} {friends.surName}
                </h3>
              </div>
              {friends.subscription.includes(userMeId) ? (
                <div className={s.center}>
                  <CustomButton
                    click={() => addFriends(friends._id, userMeId)}
                    title="Добавить в друзья"
                    typeStyle="primary"
                    size="average"
                  />
                </div>
              ) : (
                <h4 className={s.h4}>Ждём добавление в друзья...</h4>
              )}
              {/* {console.log(userMeId)} */}
            </div>
          );
        })}
      </div>
      {subscribers.length === 0 && (
        <span className={s.invitation}>
          Вы никому не кинули приглашение в друзья
        </span>
      )}
    </>
  );
};

export default AllFriends;
