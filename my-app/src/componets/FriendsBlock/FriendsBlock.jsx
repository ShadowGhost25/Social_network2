import ava from "./img/ava.png";
import s from "./friendsblock.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { useDispatch } from "react-redux";
import { friend } from "../../redux/slices/friends";
const FriendsBLock = ({ data }) => {
  const dispatch = useDispatch();
  const addFriends = (id) => {
    // post request  {user} = await ... { currentId , user: id} post

    dispatch(friend(user));
  };
  return (
    <>
      {data.map((friends, index) => {
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
                click={() => addFriends(friends._id)}
                title="Добавить в друзья"
                typeStyle="primary"
                size="average"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FriendsBLock;
