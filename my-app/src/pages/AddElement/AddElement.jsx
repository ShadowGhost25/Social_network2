import { Navigate, useNavigate, useParams } from "react-router-dom";
import Header from "../../componets/Header/Header";
import s from "./addelement.module.css";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slices/login";
import React from "react";
import axios from "../../axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { localHost } from "../../Route/route";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddElement = () => {
  const { id } = useParams();
  const isAuth = useSelector(selectIsAuth);
  const url = window.location.pathname;
  const navigate = useNavigate();
  const isEdditing = Boolean(id);
  const [isLoading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [tags, setTags] = React.useState("");
  const [text, setText] = React.useState("");
  const [imageUrl, setImgUrl] = React.useState("");
  const inputRef = React.useRef("");
  const isImageUrl = !!imageUrl;

  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);

  const option = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: false,
      placeholder:
        url === `/group/${id}/edit` || url === "/add-group"
          ? "Текст группы"
          : "Текст поста",
      status: true,
      autoSave: {
        enable: true,
        delay: 1000,
      },
      toolbar: [
        "bold",
        "italic",
        "heading",
        "|",
        "ordered-list",
        "preview",
        "|",
      ],
      previewRender: function (plainText) {
        return "<p>" + plainText.replace(/\n/g, "</p><p>") + "</p>";
      },
    }),
    []
  );
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
      let data;

      const fields = {
        title,
        tags,
        text,
        imageUrl,
      };
      if (`/group/${id}/edit` === url) {
        ({ data } = await axios.patch(`/group/${id}`, fields));
        navigate(`/group`);
      }
      if (`/posts/${id}/edit` === url) {
        ({ data } = await axios.patch(`/posts/${id}`, fields));
      }
      if (!isEdditing) {
        data = await axios.post(`${url.split("/")[1]}`, fields);
        switch (`${url.split("/")[1]}`) {
          case "add-posts":
            navigate(`/posts/${data.data._id}`);
            break;
          case "add-group":
            navigate(`/group/${data.data._id}`);
            break;
          default:
            break;
        }
      } else if (url === "/add-posts" || `/posts/${id}/edit` === url) {
        navigate(`/posts/${id}`);
      } else if (url === "/add-group" || `/group/${id}/edit` === url) {
        navigate(`/group/${id}`);
      }
    } catch (error) {
      toast.error(error.response.data[0].msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  React.useEffect(() => {
    if (`/posts/${id}/edit` === url) {
      axios
        .get(`/posts/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setText(data.text);
          setTags(data.tags);
          setImgUrl(data.imageUrl);
          setTags(data.tags.join(","));
        })
        .catch((error) => {
          console.warn(error);
        });
    } else if (`/group/${id}/edit` === url) {
      axios
        .get(`/group/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setText(data.text);
        })
        .catch((error) => {
          console.warn(error);
        });
      <Navigate to="/group" />;
    }
  }, []);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <div className={s.mainPosts}>
        <div className={s.postsBlock}>
          <input
            className={s.inputTitle}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder={
              url === `/group/${id}/edit` || url === "/add-group"
                ? "Название группы"
                : "Название поста"
            }
          />
          {url === `/group/${id}/edit` || url === "/add-group" ? (
            <div></div>
          ) : (
            <input
              className={s.inputTags}
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              type="text"
              placeholder="Тэги поста"
            />
          )}
          <label className={s.inputFile}>
            <input
              name="file"
              className={s.inputFileBtn}
              ref={inputRef}
              onChange={handleChangeFile}
              type="file"
              accept=".jpg, .jpeg, .png, .gif, .bmp, .tiff, .tif, .webp, .svg"
            />
            <span className={s.inputFileBtn}>Выберите файл</span>
          </label>
          {isImageUrl && (
            <>
              <div className={s.fon}>
                <img
                  className={s.imgFile}
                  src={localHost + imageUrl}
                  alt="select"
                />
              </div>
              <button className={s.inputFileBtn} onClick={deleteImg}>
                Удалить
              </button>
            </>
          )}

          <SimpleMDE
            className={s.editor}
            value={text}
            onChange={onChange}
            options={option}
          />
          <button className={s.inputFileBtn} onClick={onSubmit}>
            {isEdditing ? "Сохранить" : "Опубликовать"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddElement;
