import ava from "./img/ava.png";
import s from "./friendsblock.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { fetchAddFriends, friend } from "../../redux/slices/friends";
const FriendsBLock = ({ data, userMeId }) => {
  // console.log(userMeId);
  const dispatch = useDispatch();
  // console.log(data)
  const addFriends = (userFriendId, userMeId) => {
    // console.log(id, userMeId)
    const params = {
      userFriendId,
      userMeId,
    };
    dispatch(fetchAddFriends(params));
  };
  return (
    <>
        <span className={s.friendsText}>Запросы в друзья (Подписчик)</span>
      <div className={s.cardBlog}>
        {/* <span className={s.friendsText}>Поиск друзей</span> */}

        {data.map((friends, index) => {
          return (
            <>
              <div key={index} className={s.card}>
                <div className={s.cardHeader}></div>
                <img className={s.ava} src={ava} alt="ava" />
                <div className={s.displayFriends}>
                  <h3 className={s.name}>
                    {friends.fullName} {friends.surName}
                  </h3>
                </div>
                {friends.subscriber.includes(userMeId) ? (
                  <div className={s.center}>
                    <CustomButton
                      click={() => addFriends(friends._id, userMeId)}
                      title="Подписчик"
                      typeStyle="primary"
                      size="average"
                    />
                  </div>
                ) : (
                  <div className={s.center}>
                    <CustomButton
                      click={() => addFriends(friends._id, userMeId)}
                      title="Добавить в друзья"
                      typeStyle="primary"
                      size="average"
                    />
                  </div>
                )}
                {/* {console.log(userMeId)} */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FriendsBLock;
