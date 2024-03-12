import s from "./posts.module.css";
import foto from "./img/groupAva.png";
import like from "./img/like.png";
import share from "./img/share.png";
import comment from "./img/comment.png";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { fetchDelete, fetchPosts } from "../../redux/slices/posts";
import { Link, useNavigate } from "react-router-dom";
import { fetchAuthMe } from "../../redux/slices/login";

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const { data } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickDelete = (id) =>{
    dispatch(fetchDelete(id))
  }
  // const onClickPost = async (obj) => {
  //   navigate(`/posts/:${obj._id}`, {
  //     state: {
  //       obj: obj,
  //     },
  //   }); 
  //   // console.log(obj)
  // };
  
  const clickRemove = (id) =>{
    navigate(`/posts/${id}/edit`)
  }
  const isPostsLoading = posts.status === "loading"
  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchAuthMe());
  }, []); 
  return (
    <>
      {(isPostsLoading ? [Array(1)] : posts.items).map((obj, index) =>
        isPostsLoading ? (
          "loaded"
        ) : (
          <div key={obj._id} className={s.mainPosts}>
            <div
              // onClick={() => {
              //   onClickPost(obj);
              // }}
              className={s.posts}
            >
              <div className={s.postsHeader}>
                <div>
                  <img className={s.foto} src={foto} alt="" />
                </div>
                <div className={s.name}>
                  <h2 className={s.h2}>{obj.title}</h2>
                  <span className={s.text}> 2 декабря 2023 в 19:10</span>
                  <div>
                    <Link to="/profile">{obj.text}</Link>
                  </div>
                </div>
              </div>

              {data._id === obj.user._id ? (
                <div>
                  <button className={s.buttonDelete} onClick={() =>{clickDelete(obj._id)}}>
                    Удалить
                  </button>
                  <button className={s.buttonDelete} onClick={() =>{clickRemove(obj._id)}}>
                    Редактировать
                  </button>
                  <div>test</div>
                </div>
              ) : (
                <div></div>
              )}
              <div className={s.postsMain}>
                <img
                  className={s.postsFoto}
                  src={`http://localhost:3002${obj.imageUrl}`}
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
