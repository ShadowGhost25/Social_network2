import Header from "../../componets/Header/Header";
import s from "./friends.module.css";
import FriendsBLock from "../../componets/FriendsBlock/FriendsBlock";
import Options from "../../componets/Options/Options";
import CustomButton from "../../componets/CustomButton/CustomButton";
import Search from "../../componets/Search/Search";

const Friends = () => {
  return (
    <>
      <Header />
      <div className={s.main}>
        <div className={s.mainBlog1}>
          <div className={s.searchFriends}>
            <div className={s.position}>
              <CustomButton
                title="Все друзья"
                typeStyle="primary"
                size="small"
              />
              <CustomButton
                title="Друзья онлайн "
                typeStyle="primary"
                rightBlock={true}
                size="average"
              />
            </div>
            <div className={s.searchBlog}>
              <Search />
            </div>
          </div>
          <div className={s.cardBlog}>
            <FriendsBLock />
          </div>
        </div>
        <div className={s.mainBlog2}>
          <Options />
        </div>
      </div>
    </>
  );
};

export default Friends;
