import s from "./posts.module.css";
import foto from "./img/groupAva.png";
import eyes from "./img/eyes.png";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDelete,
  fetchPosts,
  fetchPostsProfile,
} from "../../redux/slices/posts";
import { useNavigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/login";
import React from "react";
import moment from "moment";
import CustomButton from "../CustomButton/CustomButton";
import { assessmentPosts } from "../../Route/route";
import Markdown from "react-markdown";

const Posts = () => {
  const { posts, postsProfile } = useSelector((state) => state.posts);
  const { id } = useSelector((state) => state.login);
  const isAuth = useSelector(selectIsAuth);
  const location = window.location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchPostsProfile());
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
  const arrayPosts = location === "/profile" ? postsProfile : posts;
  return (
    <>
      {arrayPosts.items.map((obj, index) => {
        return (
          <div key={obj._id} className={s.mainPosts}>
            <div className={s.posts}>
              {id === obj.user._id && isAuth && (
                <div className={s.removeDelete}>
                  <div className={s.edit}>
                    <CustomButton
                      click={() => {
                        clickRemove(obj._id);
                      }}
                      title="Редактировать"
                      typeStyle="primary"
                      size="average"
                    />
                  </div>
                  <CustomButton
                    click={() => {
                      clickDelete(obj._id);
                    }}
                    title="Удалить"
                    typeStyle="primary"
                    size="average"
                  />
                </div>
              )}
              <div
                onClick={() => {
                  onClickPost(obj);
                }}
                className={s.postsHeader}
              >
                <div className={s.clickPosts}>
                  <img className={s.ava} src={foto} alt="ava" />
                  <div className={s.name}>
                    <h2 className={s.h2}>{obj.title}</h2>
                    <span className={s.text}>
                      {moment(obj.createdAt).locale("ru").fromNow()}
                    </span>
                  </div>
                </div>

                <div className={s.textPosts}>
                  <Markdown>{obj.text}</Markdown>
                </div>

                {obj.imageUrl && (
                  <div className={s.postsMain}>
                    <img
                      className={s.postsFoto}
                      src={`http://localhost:3002${obj.imageUrl}`}
                      alt="posts"
                    />
                  </div>
                )}
              </div>
              {obj.tags[0] && (
                <div className={s.displayTags}>
                  {obj.tags.map((tag) => {
                    return (
                      <span key={tag} className={s.tags}>
                        #{tag}
                      </span>
                    );
                  })}
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
