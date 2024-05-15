import Header from "../../componets/Header/Header";
import s from "./friends.module.css";
import FriendsBLock from "../../componets/FriendsBlock/FriendsBlock";
import CustomButton from "../../componets/CustomButton/CustomButton";
import Search from "../../componets/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../../redux/slices/friends";
import { useEffect } from "react";
import Loading from "../../componets/Loading/Loading";
import SubscriberBlock from "../../componets/SubscriberBlock/SubscriberBlock";
import { Navigate, useNavigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/login";
import SubscriptionBlock from "../../componets/SubscriptionBlock/SubscriptionBlock";

const Friends = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.login);
  const dataMe = useSelector((state) => state.login);
  const { data, status } = useSelector((state) => state.friend);
  console.log(dataMe.data);
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  const isLoading = "loaded" === status;
  useEffect(() => {
    {
      id && dispatch(fetchFriends(id));
    }
  }, [id]);
  if (!isAuth && !window.localStorage.getItem("token")) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      {!isLoading ? (
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
                    title="Мои друзья"
                    typeStyle="primary"
                    // rightBlock={true}
                    size="small"
                  />
                </div>
                <div className={s.searchBlog}>
                  <Search />
                </div>
              </div>
              <FriendsBLock data={data} userMeId={id} />
              <SubscriberBlock data={data} userMeId={id} />
              <SubscriptionBlock data={data} userMeId={id} />
            </div>
            {/* <div className={s.mainBlog2}>
              <Options />
            </div> */}
          </div>
        </>
      )}
    </>
  );
};

export default Friends;
