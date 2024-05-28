import s from "./formadmin.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

const FormAdmin = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/admin");
  };
  return (
    <div className={s.mainFriends}>
      <h3 className={s.h3Foto}>Админка</h3>
      <hr />
      <div className={s.style}>
        <CustomButton
          click={onClick}
          title="Войти"
          typeStyle="primary"
          size="small"
        />
      </div>
    </div>
  );
};

export default FormAdmin;
