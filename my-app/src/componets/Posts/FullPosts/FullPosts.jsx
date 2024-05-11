import React from "react";
import Header from "../../Header/Header";
import { useParams } from "react-router-dom";
import axios from "../../../axios";
import s from "./fullposts.module.css";
import Loading from "../../Loading/Loading";
import Markdown from "react-markdown";
import moment from "moment";
import "moment/locale/ru";
import { assessmentPosts, localHost } from "../../../Route/route";
import CustomButton from "../../CustomButton/CustomButton";

const FullPosts = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState();
  const [isActive, setIsActive] = React.useState(true);
  const { id } = useParams();
  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      {!isLoading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div key={data._id} className={s.mainPosts}>
            <div className={s.posts}>
              <div className={s.postsHeader}>
                <div className={s.name}>
                  <h2 className={s.h2}>{data.title}</h2>
                  <span className={s.text}>
                    {moment(data.createdAt).locale("ru").fromNow()}
                  </span>

                  <div
                    onClick={() => {
                      handleClick(false);
                    }}
                    className={isActive && s.orienter}
                  >
                    <Markdown>{data.text}</Markdown>
                  </div>
                </div>
              </div>
              {data.imageUrl && (
                <div className={s.postsMain}>
                  <img
                    className={s.postsFoto}
                    src={localHost + data.imageUrl}
                    alt="posts"
                  />
                </div>
              )}
              <div className={s.buttonFotter}>
                {assessmentPosts.map((obj, index) => {
                  return (
                    <div className={s.marginBox}>
                      <CustomButton
                        key={index}
                        imageName={obj.imageName}
                        typeStyle={obj.typeStyle}
                        centerImage={obj.position}
                      />
                    </div>
                  );
                })}
                <div className={s.position}>
                  <CustomButton
                    typeStyle="assessment"
                    centerImage={true}
                    imageName="share"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default FullPosts;
