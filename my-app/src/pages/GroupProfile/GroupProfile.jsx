import CustomButton from "../../componets/CustomButton/CustomButton";
import FriendsOnline from "../../componets/FriendsOnline/FriendsOnline";
import Header from "../../componets/Header/Header";
import s from "./groupprofile.module.css";
import Posts from "../../componets/Posts/Posts";
import GroupNotification from "../../componets/GroupNotification/GroupNotification";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import React from "react";
import ava from "./img/i 4.svg";
import Loading from "../../componets/Loading/Loading";
const GroupProfile = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState();
  const { id } = useParams();
  React.useEffect(() => {
    axios
      .get(`/group/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <>
      {!isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div className={s.profileMain}>
            <div className={s.headerProfile}>
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
            <div className={s.main}>
              <div className={s.main1}>
                <div className={s.blogProfileUser}>
                  <img className={s.ava} src={ava} alt="ava" />
                  <hr />
                  <span className={s.friendsInput}>{data.title}</span>
                  <div className={s.positionButton}>
                    <CustomButton
                      title="Отписаться"
                      size="small"
                      typeStyle="primary"
                    />
                  </div>
                </div>
              </div>
              <div className={s.main2}>
                <div className={s.user}>
                  <span className={s.userFio}>{data.text}</span>
                </div>
                <div className={s.postsPosition}>
                  <Posts />
                </div>
              </div>
              <div className={s.margin}>
                <FriendsOnline />
                <div>
                  <GroupNotification />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GroupProfile;
