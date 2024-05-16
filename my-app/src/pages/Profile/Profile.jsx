import Header from "../../componets/Header/Header";
import s from "./profile.module.css";
import ava from "./img/ava.png";
import Posts from "../../componets/Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/login";
import { Navigate, useParams } from "react-router-dom";
import Loading from "../../componets/Loading/Loading";
import CustomButton from "../../componets/CustomButton/CustomButton";
import { navigationButtons } from "../../Route/route";
import GroupNotification from "../../componets/GroupNotification/GroupNotification";
import FriendsOnline from "../../componets/FriendsOnline/FriendsOnline";
import { useEffect } from "react";
import { fetchUser } from "../../redux/slices/user";
const Profile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const location = window.location.pathname;
  const { id } = useParams();
  const { status, data } = useSelector((state) => state.login);
  const dataUser = useSelector((state) => state.user);
  const isProfileLoading = status === "loaded";
  const isUserLoading = dataUser.status === "loaded";
  useEffect(() => {
    if (id) {
      dispatch(fetchUser(id));
    }
  }, [location]);
  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти.")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }
  console.log(dataUser);
  debugger;
  const user = location === "/profile" ? data : dataUser.data;
  return (
    <>
      {!isProfileLoading && !isUserLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div className={s.profileMain}>
            <div className={s.headerProfile}>
              <div className={s.blogAva}>
                <div className={s.positionButton2}>
                  <CustomButton
                    typeStyle="primary"
                    title="Изменить обложку"
                    size="average"
                    imageName="pencil"
                    rightImage={true}
                  />
                </div>
              </div>
            </div>
            <div className={s.main}>
              <div className={s.main1}>
                <div className={s.blogProfileUser}>
                  <img className={s.ava} src={ava} alt="no img" />
                  <span className={s.friendsInput}>Друзья</span>
                  <span className={s.kolFriends}>14</span>
                  <hr />
                  <div className={s.positionButton}>
                    <CustomButton
                      title="Выйти"
                      size="small"
                      click={onClickLogout}
                      typeStyle="primary"
                    />
                  </div>
                </div>
                <div className={s.margin}>
                  <FriendsOnline />
                </div>
              </div>
              <div className={s.main2}>
                <div className={s.user}>
                  <span className={s.userFio}>
                    {user?.fullName} {user?.surName}
                  </span>
                  <span className={s.status}>{user?.status}</span>
                  <div className={s.imgDisplay}>
                    {navigationButtons.map((obj, index) => (
                      <div key={index} className={s.positionBlock}>
                        <CustomButton
                          key={index}
                          centerImage={obj.position}
                          typeStyle={obj.typeStyle}
                          imageName={obj.imageName}
                          title={obj.title}
                          alt={obj.alt}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={s.postsPosition}>
                  <Posts />
                </div>
              </div>
              <GroupNotification />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
