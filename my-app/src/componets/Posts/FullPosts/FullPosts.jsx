import React from "react";
import Header from "../../Header/Header";
import { useParams } from "react-router-dom";
import axios from "../../../axios";


const FullPosts = () => {
  const [data, setData] = React.useState()
  const [isLoading, setLoading] = React.useState()
  const { id } = useParams()

  React.useEffect(() => {
    axios.get(`/posts/${id}`).then(res => {
      setData(res.data)
      console.log(res.data)
    }).catch ((err) =>{
      console.log(err)
    })
  }, [])
  if(isLoading){
    return <div isLoading={isLoading} >loading</div>
  }
  return (
    <>
      <Header />
      {/* <div>{data._id}</div> */}
    </>
  );
};
export default FullPosts;

      // <div
      //       key={state.obj._id}
      //       className={s.mainPosts}
      //     >
      //       <div className={s.posts}>
      //         <div className={s.postsHeader}>
      //           <div>
      //             {/* <img className={s.foto} src={} alt="" /> */}
      //           </div>
      //           <div className={s.name}>
      //             <h2 className={s.h2}>{state.obj.title}</h2>
      //             <span className={s.text}> 2 декабря 2023 в 19:10</span>
      //             <div>{state.obj.text}</div>
      //           </div>
      //         </div>
      //         <div className={s.postsMain}>
      //           <img
      //             className={s.postsFoto}
      //             src={`http://localhost:3000${state.obj.imageUrl}`}
      //             alt="no img"
      //           />
      //         </div>
      //         <div className={s.buttonFotter}>
      //           <button className={s.buttonClick}>
      //             {/* <img src={like} alt="" /> */}
      //             <span className={s.textButton}> Нравится</span>
      //           </button>
      //           <button className={s.buttonClick}>
      //             {/* <img src={share} alt="" /> */}
      //             <span className={s.textButton}> Комментарий</span>
      //           </button>
      //           <button className={s.buttonClick}>
      //             {/* <img src={comment} alt="" /> */}
      //             <span className={s.textButton}> Поделиться</span>
      //           </button>
      //         </div>
      //       </div>
      //     </div>