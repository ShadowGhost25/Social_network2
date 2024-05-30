import s from "./admin.module.css";
import Header from "../../componets/Header/Header";
import Loading from "../../componets/Loading/Loading";
import CustomButton from "../../componets/CustomButton/CustomButton";
import ava from "./img/ava.png";
import { fetchAdmin, fetchDeleteAdmin } from "../../redux/slices/admin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchAdmin());
  }, [dispatch]);
  const { data, status } = useSelector((state) => state.admin);
  const isLoadingAdmin = status === "loaded";
  const deleteUser = (userId) => {
    if (window.confirm("Вы действительно хотите удалить пользователя ?")) {
      dispatch(fetchDeleteAdmin(userId));
    }
  };
  const cliсkMe = (userId) => {
    navigate(`/profile/${userId}`);
  };
  return (
    <>
      {!isLoadingAdmin ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className={s.main}>
            <div className={s.main2}>
              <span className={s.friendsText}>Панель администратора</span>
              <div className={s.cardBlog}>
                {data.map((friends, index) => {
                  return (
                    <>
                      <div
                        onClick={() => cliсkMe(friends._id)}
                        key={index}
                        className={s.card}
                      >
                        <div className={s.cardHeader}></div>
                        <img className={s.ava} src={ava} alt="ava" />
                        <div className={s.displayFriends}>
                          <h3 className={s.name}>
                            {friends.fullName} {friends.surName}
                          </h3>
                        </div>
                        <div className={s.center}>
                          <CustomButton
                            click={() => deleteUser(friends._id)}
                            title="Удалить пользователя"
                            typeStyle="primary"
                            size="average"
                          />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;
