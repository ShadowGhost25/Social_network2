import s from "./options.module.css";
import CustomButton from "../CustomButton/CustomButton";
import { measurementAge } from "../../Route/route";
const Options = () => {
  return (
    <div className={s.parametersBlog}>
      <h3 className={s.h3}>Параметры</h3>
      <CustomButton
        title="Выбрать город"
        typeStyle="primary"
        imageName="city"
        size="full"
        rightImage={true}
      />
      <h3 className={s.age}>Возраст</h3>
      <div className={s.positionUpDown}>
        {measurementAge.map((obj, index) => {
          return (
            <CustomButton
            key={index}
              title={obj.title}
              typeStyle={obj.typeStyle}
              size={obj.size}
              rightImage={obj.position}
            />
          );
        })}
      </div>
      <h3 className={s.floor}>Пол</h3>
      <div className={s.displayFloor}>
        <input type="radio" /> Мужчина <br />
        <input type="radio" /> Девушка <br />
        <input type="radio" /> Любой <br />
      </div>
    </div>
  );
};

export default Options;
