import s from "./custombutton.module.css";
import box from "../../pages/Profile/img/box.png";
import foto from "../../pages/Profile/img/foto.png";
import info from "../../pages/Profile/img/info.png";
import plus from "../SettingsFriends/img/plus.svg";
import city from "../Options/img/Vector.png";
import like from "../Posts/img/like.png";
import share from "../Posts/img/share.png";
import comment from "../Posts/img/comment.png";
import up from "../Options/img/Up.png";
import down from "../Options/img/Down.png";
import pencil from "../../pages/Profile/img/Vector.png";
import news from "../Header/img/News.png";
import message from "../Header/img/Messages.png";
import friends from "../Header/img/Friends.png";
import group from "../Header/img/Groups.png";
import music from "../Header/img/Music.png";
import settings from "../Header/img/Setings.png";
import vector from "../../pages/Music/img/Vector.png";
import user from "../Header/img/user.svg";
import cross from "../MusicPlayMe/img/cross.svg";
import me from "../Header/img/Ava.png";

const CustomButton = ({
  click,
  onChange,
  index,
  imageName,
  title,
  typeStyle,
  centerImage,
  rightImage,
  leftImage,
  rightBlock,
  position,
  size,
  pathName,
  url = null,
}) => {
  const imgName = () => {
    switch (imageName) {
      case "box":
        return box;
      case "foto":
        return foto;
      case "info":
        return info;
      case "city":
        return city;
      case "like":
        return like;
      case "share":
        return share;
      case "up":
        return up;
      case "down":
        return down;
      case "plus":
        return plus;
      case "comment":
        return comment;
      case "pencil":
        return pencil;
      case "news":
        return news;
      case "message":
        return message;
      case "friends":
        return friends;
      case "group":
        return group;
      case "music":
        return music;
      case "settings":
        return settings;
      case "vector":
        return vector;
      case "user":
        return user;
      case "me":
        return me;
      case "cross":
        return cross;
      default:
    }
  };
  const buttonStyles = (typeStyle) => {
    switch (typeStyle) {
      case "primary":
        return s.profileButton;
      case "settings":
        return s.buttonSettings;
      case "assessment":
        return s.buttonAssessment;
      case "navBar":
        return s.blokImg;
      case "navBarProfile":
        return s.navBarProfile;
      default:
    }
  };
  const sizeButton = () => {
    switch (size) {
      case "small":
        return s.sizeM;
      case "average":
        return s.sizeA;
      case "full":
        return s.sizeF;
      case "button":
        return s.sizeB;
      default:
    }
  };

  const positionSpan = () => {
    switch (position) {
      case "left":
        return s.positionSpan;
      default:
    }
  };
  const activeClass =
    typeStyle === "settings" ? s.buttonSettingsActive : s.blockImgActive;
  return (
    <button
      onClick={click}
      key={index}
      className={
        pathName === url
          ? `${activeClass} ${sizeButton(size)}`
          : `${buttonStyles(typeStyle)} ${sizeButton(size)}`
      }
    >
      {leftImage && <img src={imgName()} alt={imageName} />}
      {title && (
        <span className={`${s.input} ${positionSpan(position)}`}>{title}</span>
      )}
      {rightBlock && <div className={s.ellips}></div>}
      {rightImage && <img className={s.city} src={imgName()} alt={imageName} />}
      {centerImage && (
        <img className={s.centerImage} src={imgName()} alt={imageName} />
      )}
    </button>
  );
};

export default CustomButton;
