import Header from "../../componets/Header/Header";
import s from "./friends.module.css";
import CustomButton from "../../componets/CustomButton/CustomButton";
import Search from "../../componets/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchFriends } from "../../redux/slices/friends";
import { useEffect, useState } from "react";
import Loading from "../../componets/Loading/Loading";
import SubscriberBlock from "../../componets/SubscriberBlock/SubscriberBlock";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/login";
import SubscriptionBlock from "../../componets/SubscriptionBlock/SubscriptionBlock";
import AllFriends from "../../componets/AllFriends/AllFriends";
import MeFriends from "../../componets/MeFriends/MeFriends";

const Friends = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.login);
  const dataMe = useSelector((state) => state.login);
  const { data, status } = useSelector((state) => state.friend);
  const isAuth = useSelector(selectIsAuth);
  const [friends, setFriends] = useState(true);
  const [meAllFriends, setMeAllFriends] = useState(false);
  const isLoading = "loaded" === status;
  useEffect(() => {
    id && dispatch(fetchFriends(id));

  }, [id]);
  // useEffect(() => {
  //   if (dataMe !== null) {
  //     console.log(dataMe.data);
  //   }
  // }, [dataMe]);
  if (!isAuth && !window.localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  console.log()
  const allFriends = () => {
    setFriends(true);
    setMeAllFriends(false)
  };
  const meFriends = () => {
    setMeAllFriends(true);
    setFriends(false);

  };
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
                    click={allFriends}
                    title="Все друзья"
                    typeStyle="primary"
                    size="small"
                  />
                  <CustomButton
                    click={meFriends}
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
              {friends && (
                <>
                  <AllFriends data={data} userMeId={id} />
                  <SubscriberBlock data={data} userMeId={id} />
                  <SubscriptionBlock data={data} userMeId={id} />
                </>
              )}
              {meAllFriends && <MeFriends data={data} userMeId={id}  />}
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
