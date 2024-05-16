import ava from "./img/ava.png";
import s from "./subscriberblock.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { fetchAddFriends } from "../../redux/slices/friends";

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
  const subscription = data.filter((user) =>
    user.subscription.includes(userMeId)
  );
  console.log();
  return (
    <>
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
      {subscription.length === 0 && (
        <span className={s.invitation}>
          У вас пока нет приглашений в друзья
        </span>
      )}
    </>
  );
};

export default SubscriberBlock;
