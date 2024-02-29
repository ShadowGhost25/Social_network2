import Header from "../Header/Header";
import History from "../History/History";
import Posts from "../Posts/Posts";
import s from "./home.module.css"


const Home = () => {
  return (
    <div>
      <Header />
      <History />
      <div className={s.mainHome}>
      <Posts />
      </div>
      <div className={s.mainHome}>
      <Posts />
      </div>
      <div className={s.mainHome}>
      <Posts />
      </div>
    </div>
  );
}

export default Home;