import React from "react";
import Header from "../../Header/Header";
import { useParams } from "react-router-dom";
import axios from "../../../axios";
import s from "./fullposts.module.css";
import Loading from "../../Loading/Loading";
import Markdown from 'react-markdown'

const FullPosts = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState();
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
                <div>{/* <img className={s.foto} src={} alt="no img" /> */}</div>
                <div className={s.name}>
                  <h2 className={s.h2}>{data.title}</h2>
                  <span className={s.text}> 2 декабря 2023 в 19:10</span>
                  <Markdown>{data.text}</Markdown>
                </div>
              </div>
              <div className={s.postsMain}>
                <img
                  className={s.postsFoto}
                  src={`http://localhost:3002${data.imageUrl}`}
                  alt="no img"
                />
              </div>
              <div className={s.buttonFotter}>
                <button className={s.buttonClick}>
                  {/* <img src={like} alt="no img" /> */}
                  <span className={s.textButton}> Нравится</span>
                </button>
                <button className={s.buttonClick}>
                  {/* <img src={share} alt="no img" /> */}
                  <span className={s.textButton}> Комментарий</span>
                </button>
                <button className={s.buttonClick}>
                  {/* <img src={comment} alt="no img" /> */}
                  <span className={s.textButton}> Поделиться</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default FullPosts;