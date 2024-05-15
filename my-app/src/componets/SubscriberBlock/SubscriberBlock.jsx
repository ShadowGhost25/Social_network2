import ava from "./img/ava.png";
import s from "./subscriberblock.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddFriends, friend } from "../../redux/slices/friends";
import { selectIsAuth } from "../../redux/slices/login";
import { Navigate, useNavigate } from "react-router-dom";

const SubscriberBlock = ({ data, userMeId }) => {
  const dispatch = useDispatch();
  const addFriends = (userFriendId, userMeId) => {
    // console.log(id, userMeId)
    const params = {
      userFriendId,
      userMeId,
    };
    dispatch(fetchAddFriends(params));
    window.location.reload();
  };
  const subscribers = data.filter((user) =>
    user.subscription.includes(userMeId)
  );
  console.log(subscribers, "subscribers");
  return (
    <>
      <span className={s.friendsText}>
        К вам запросы в друзья (SubscriberBlock){" "}
      </span>
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
                <div className={s.displayFriends}>
                  <h3 className={s.name}>
                    {friends.fullName} {friends.surName}
                  </h3>
                </div>
              )}
              {/* {console.log(userMeId)} */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SubscriberBlock;
