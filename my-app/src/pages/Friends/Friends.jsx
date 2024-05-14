import Header from "../../componets/Header/Header";
import s from "./friends.module.css";
import FriendsBLock from "../../componets/FriendsBlock/FriendsBlock";
import Options from "../../componets/Options/Options";
import CustomButton from "../../componets/CustomButton/CustomButton";
import Search from "../../componets/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../../redux/slices/friends";
import React from "react";
import Loading from "../../componets/Loading/Loading";

const Friends = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchFriends());
  }, []);
  const { data, status } = useSelector((state) => state.friend);
  const idLoading = "loaded" === status;
  return (
    <>
      {!idLoading ? (
        <Loading />
      ) : (
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
              <span className={s.friendsText}>Поиск друзей</span>
              <div className={s.cardBlog}>
                <FriendsBLock data={data} />
              </div>
            </div>
            <div className={s.mainBlog2}>
              <Options />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Friends;
