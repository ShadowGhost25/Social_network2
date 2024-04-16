import Header from "../../componets/Header/Header";
import s from "./profile.module.css";
import ava from "./img/ava.png";
import alex from "./img/alex.png";
import i from "./img/i.webp";
import ellipse from "./img/Ellipse 6.png";
import Posts from "../../componets/Posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/login";
import { Navigate } from "react-router-dom";
import Loading from "../../componets/Loading/Loading";
import CustomButton from "../../componets/CustomButton/CustomButton";
import { navigationButtons } from "../../Route/route";
const Profile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const { status, data } = useSelector((state) => state.login);
  const isProfileLoading = status === "loaded";
  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти.")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {!isProfileLoading ? (
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
                <div className={s.mainFriends}>
                  <h3 className={s.h3Foto}>Друзья онлайн</h3>
                  <hr />
                  test
                  <div className={s.friends}>
                    <img className={s.test} src={alex} alt="no img" />
                    <span className={s.friendsName}>Саша</span>
                    <img className={s.ellipse} src={ellipse} alt="no img" />
                  </div>
                </div>
              </div>
              <div className={s.main2}>
                <div className={s.user}>
                  <span className={s.userFio}>
                    {data.fullName} {data.surName}
                  </span>
                  <span className={s.status}>{data.status}</span>
                  <div className={s.imgDisplay}>
                    {navigationButtons.map((obj, index) => (
                      <div className={s.positionBlock}>
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
              <div className={s.main3}>
                <h3 className={s.h3Foto}>Новые уведомления групп</h3>
                <hr />
                <div className={s.friends}>
                  <img className={s.test} src={i} alt="no img" />
                  <span className={s.friendsName}>One Piece</span>
                  <img className={s.ellipse} src={ellipse} alt="no img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
