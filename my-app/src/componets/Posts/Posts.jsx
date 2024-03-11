import s from "./posts.module.css";
import foto from "./img/groupAva.png";
import like from "./img/like.png";
import share from "./img/share.png";
import comment from "./img/comment.png";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { fetchPosts } from "../../redux/slices/posts";
import { Link, useNavigate } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const onClickPost = async (obj) => {

// console.log(abjArr[0][1])
    navigate(`/posts/:${obj._id}`,{
      state: {
        obj: obj,
      }
    })
  };
  const isPostsLoading = posts.status === "loading";
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      {(isPostsLoading ? [Array(1)] : posts.items).map((obj, index) =>
        isPostsLoading ? (
          "loaded"
        ) : (
          <div
            key={obj._id}
            className={s.mainPosts}
            onClick={() => {
              onClickPost(obj);
            }}
          >
            <div className={s.posts}>
              <div className={s.postsHeader}>
                <div>
                  <img className={s.foto} src={foto} alt="" />
                </div>
                <div className={s.name}>
                  <h2 className={s.h2}>{obj.title}</h2>
                  <span className={s.text}> 2 декабря 2023 в 19:10</span>
                  <div>{obj.text}</div>
                </div>
              </div>
              <div className={s.postsMain}>
                <img
                  className={s.postsFoto}
                  src={`http://localhost:3000${obj.imageUrl}`}
                  alt="no img"
                />
              </div>
              <div className={s.buttonFotter}>
                <button className={s.buttonClick}>
                  <img src={like} alt="" />
                  <span className={s.textButton}> Нравится</span>
                </button>
                <button className={s.buttonClick}>
                  <img src={share} alt="" />
                  <span className={s.textButton}> Комментарий</span>
                </button>
                <button className={s.buttonClick}>
                  <img src={comment} alt="" />
                  <span className={s.textButton}> Поделиться</span>
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
export default Posts;
