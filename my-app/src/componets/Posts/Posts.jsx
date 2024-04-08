import s from "./posts.module.css";
import foto from "./img/groupAva.png";
import eyes from "./img/eyes.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchDelete, fetchPosts } from "../../redux/slices/posts";
import { useNavigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/login";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { assessmentPosts } from "../../Route/route";

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
                <img className={s.ava} src={foto} alt="ava" />
                <div className={s.name}>
                  <h2 className={s.h2}>{obj.title}</h2>
                  <span className={s.text}>{obj.createdAt}</span>
                </div>
              </div>
              {id === obj.user._id && isAuth ? (
                <div className={s.removeDelete}>
                  <CustomButton
                    click={() => {
                      clickRemove(obj._id);
                    }}
                    title="Редактировать"
                    typeStyle="primary"
                    size="average"
                  />
                  <CustomButton
                    click={() => {
                      clickDelete(obj._id);
                    }}
                    title="Удалить"
                    typeStyle="primary"
                    size="average"
                  />
                </div>
              ) : (
                <div></div>
              )}
              <div className={s.textPosts}>
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
                  <div className={s.positionViewsCount}>
                    <div>{obj.viewsCount}</div>
                    <img src={eyes} alt="eyes" />
                  </div>
                  <CustomButton
                    typeStyle="assessment"
                    centerImage={true}
                    imageName="share"
                  />
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
