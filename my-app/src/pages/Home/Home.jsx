import { useDispatch, useSelector } from "react-redux";
import Header from "../../componets/Header/Header";
import History from "../../componets/History/History";
import Posts from "../../componets/Posts/Posts";
import s from "./home.module.css";
import React from "react";
import Loading from "../../componets/Loading/Loading";
import { fetchPosts } from "../../redux/slices/posts";

const Home = () => {
  const { posts } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === "loaded";
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      {!isPostsLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <History />
          <div className={s.mainHome}>
            <Posts />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
