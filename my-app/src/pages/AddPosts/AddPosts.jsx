import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../componets/Header/Header";
import s from "./addposts.module.css";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/login";
import React from "react";
import axios from "../../axios";

const AddPosts = () => {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const [isLoading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [text, setText] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const inputRef = React.useRef("");
  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImgUrl(data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImg = () => {
    setImgUrl("");
  };
  const onSubmit = async () => {
    try {
      setLoading(true);

      const fields = {
        title,
        tags,
        text,
        imgUrl,
      };

      const { data } = await axios.post("/add-posts", fields);
      const id = data._id;
      console.log(data)
      navigate(`/`)
    } catch (error) {
      console.warn(error);
    }
  };

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Header />
      <div className={s.mainPosts}>
        <div className={s.whiteBlock}>
          <div className={s.postsBlock}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Название поста"
            />
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Текст поста"
            />
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              type="text"
              placeholder="Тэги поста"
            />
            <input
              ref={inputRef}
              onChange={handleChangeFile}
              type="file"
              placeholder="Картинка поста"
            />
            <img src={`http://localhost:3002${imgUrl}`} alt="" />
            <button onClick={deleteImg}>Удалить</button>
            <button onClick={onSubmit}>Опубликовать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosts;
