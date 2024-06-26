import s from "./musicplay.module.css";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { localHost } from "../../Route/route";
import { fetchMusicMe } from "../../redux/slices/music";
const MusicPlay = ({ musicList }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.login);
  const addMusic = async (music) => {
    const obj = {
      music,
      id,
    };
    if (window.confirm("Вы действительно хотите добавить музыку ?")) {
      dispatch(fetchMusicMe(obj));
      window.location.reload();
    }
  };

  return (
    <>
      {musicList.map((arr, index) => {
        const nameWithoutExtension = arr.replace(".mp3", "");
        return (
          <div key={index} className={s.music}>
            <div className={s.marginBlock}>
              <div className={s.activeText}>{nameWithoutExtension}</div>
              <audio src={localHost + arr}></audio>
              <CustomButton
                click={() => {
                  addMusic(arr);
                }}
                size="button"
                typeStyle="primary"
                imageName="plus"
                centerImage={true}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MusicPlay;
