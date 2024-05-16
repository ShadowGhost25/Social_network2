import ava from "./img/ava.png";
import s from "./mefriends.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { fetchDeleteFriends } from "../../redux/slices/friends";

const MeFriends = ({ data, userMeId }) => {
    // console.log(userMeId);
    const dispatch = useDispatch();
    // console.log(data);
    const deleteFriends = (userFriendId, userMeId) => {
      // console.log(id, userMeId)
      const params = {
        userFriendId,
        userMeId,
      };
      dispatch(fetchDeleteFriends(params));
    //   window.location.reload();
    };
    const subscribers = data.filter((user) => user.friend.includes(userMeId));
  
    return (
      <>
        <span className={s.friendsText}>Мои друзья</span>
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
                  <div className={s.center}>
                    <CustomButton
                      click={() => deleteFriends(friends._id, userMeId)}
                      title="Удалить из друзей"
                      typeStyle="primary"
                      size="average"
                    />
                  </div>
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
  
  export default MeFriends;
  