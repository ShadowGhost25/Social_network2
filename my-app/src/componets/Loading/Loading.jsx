import s from "./loading.module.css";
const Loading = () => {
  return (
    <div className={s.main}>
      <div className={s.spinner}></div>
    </div>
  );
};

export default Loading;
