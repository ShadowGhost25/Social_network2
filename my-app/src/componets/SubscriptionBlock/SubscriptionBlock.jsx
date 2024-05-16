import ava from "./img/ava.png";
import s from "./subscriptionblock.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { fetchAddFriends } from "../../redux/slices/friends";

const SubscriptionBlock = ({ data, userMeId }) => {
  // console.log(userMeId);
  const dispatch = useDispatch();
  // console.log(data);
  const addFriends = (userFriendId, userMeId) => {
    // console.log(id, userMeId)
    const params = {
      userFriendId,
      userMeId,
    };
    dispatch(fetchAddFriends(params));
    window.location.reload();
  };
  const subscribers = data.filter((user) => user.subscriber.includes(userMeId));

  return (
    <>
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

export default SubscriptionBlock;
