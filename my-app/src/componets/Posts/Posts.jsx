import s from "./posts.module.css";
import foto from "./img/groupAva.png";
import like from "./img/like.png";
import share from "./img/share.png";
import comment from "./img/comment.png";
import eyes from "./img/eyes.png"
import { useDispatch, useSelector } from "react-redux";
import { fetchDelete, fetchPosts } from "../../redux/slices/posts";
import { useNavigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/login";
import React from "react";

const Posts = () => {
  const { posts } = useSelector((state) => state.posts);
  const { id } = useSelector((state) => state.login);
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const clickDelete = (id) => {
    if (window.confirm("Вы действительно хотите удалить пост ?")) {
      dispatch(fetchDelete(id));
    }
  };

  const onClickPost = async (obj) => {
    navigate(`/posts/${obj._id}`);
  };

  const clickRemove = (id) => {
    navigate(`/posts/${id}/edit`);
  };
  return (
    <>
      {posts.items.map((obj, index) => {
        return (
          <div key={obj._id} className={s.mainPosts}>
            <div className={s.posts}>
              <div
                className={s.postsHeader}
                onClick={() => {
                  onClickPost(obj);
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={foto}
                  alt="no img"
                />
                <div className={s.name}>
                  <h2 className={s.h2}>{obj.title}</h2>
                  <span className={s.text}>{obj.createdAt}</span>
                </div>
              </div>
              {id === obj.user._id && isAuth ? (
                <div className={s.removeDelete}>
                  <button
                    style={{ marginBottom: "10px" }}
                    className={s.buttonRemove}
                    onClick={() => {
                      clickRemove(obj._id);
                    }}
                  >
                    <span className={s.textButton}>Редактировать</span>
                  </button>
                  <button
                    className={s.buttonDelete}
                    onClick={() => {
                      clickDelete(obj._id);
                    }}
                  >
                    <span className={s.textButton}>Удалить</span>
                  </button>
                </div>
              ) : (
                <div></div>
              )}
              <div style={{ textAlign: "justify" }}>
                {obj.text} Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Exercitationem amet doloremque, at nihil corrupti quis,
                doloribus corporis maxime, ea iusto nam laudantium quaerat! Iste
                pariatur, id exercitationem possimus voluptate iure.
              </div>
              <div
                onClick={() => {
                  test(obj.tags[0]);
                }}
                style={{ marginBottom: "10px" }}
              >
                {obj.tags}
              </div>

              <div className={s.postsMain}>
                <img
                  className={s.postsFoto}
                  src={`http://localhost:3002${obj.imageUrl}`}
                  alt="no img"
                />
              </div>
              <div className={s.buttonFotter}>
                <div>
                  <button className={s.buttonClick}>
                    <img className={s.imgCLick} src={like} alt="no img" />
                  </button>
                  <button style={{marginLeft: "10px"}} className={s.buttonClick}>
                    <img src={comment} alt="no img" />
                  </button>
                </div>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center"}}>
                  <div style={{marginRight: "3px"}}>
                  {obj.viewsCount}
                  </div>
                  <img  src={eyes} alt="no img" />
                  <button style={{display: "block", marginLeft: "10px"}} className={s.buttonClick}>
                    <img className={s.imgCLick2} src={share} alt="no img" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Posts;
