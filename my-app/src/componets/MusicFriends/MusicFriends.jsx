import s from "./musicfriends.module.css";
import alex from "../../pages/Music/img/alex.png";
const MusicFriends = () => {
    return ( 
        <div className={s.music}>
            <img src={alex} alt="avatar" />
          <div className={s.positionName}>
            <h3 className={s.h3}> Саша </h3>
          </div>
          <div className={s.positionMusic}>
            <h4 className={s.h4}>
              586
            </h4>
            <span>Аудиозаписи</span>
          </div>
        </div> );
}
 
export default MusicFriends;