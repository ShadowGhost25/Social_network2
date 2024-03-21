import { useSelector } from "react-redux";
import Header from "../../componets/Header/Header";
import History from "../../componets/History/History";
import Posts from "../../componets/Posts/Posts";
import s from "./home.module.css";
import React from "react";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === "loaded";
  console.log(isPostsLoading);
  return (
    <>
      <Header />
      <div className={s.main}>
        <div>
          <div></div>
        </div>
        <div>
          <History />
          <div className={s.mainHome}>
            <Posts />
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default Home;
