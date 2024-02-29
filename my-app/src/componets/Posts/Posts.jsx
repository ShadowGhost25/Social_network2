import s from './posts.module.css'
import foto from './img/groupAva.png'
import posts from './img/posts.png'
import like from './img/like.png'
import share from './img/share.png'
import comment from './img/comment.png'

const Posts = () => {
    return (
        <div className={s.mainPosts}>
            <div className={s.posts}>
                <div className={s.postsHeader}>
                    <div>
                        <img className={s.foto} src={foto} alt="" />
                    </div>
                    <div className={s.name}>
                        <h2 className={s.h2}>Saturn</h2>
                        <span className={s.text}> 2 декабря 2023 в 19:10</span>
                    </div>
                </div>
                <div className={s.postsMain}>
                    <img className={s.postsFoto} src={posts} alt="" />
                </div>
                <div className={s.buttonFotter}>
                <button className={s.buttonClick}><img src={like} alt="" /><span className={s.textButton}> Нравится</span></button>
                <button className={s.buttonClick}><img src={share} alt="" /><span className={s.textButton}> Комментарий</span></button>
                <button className={s.buttonClick}><img src={comment} alt="" /><span className={s.textButton}> Поделиться</span></button>
                </div>
            </div>
        </div>
    )
}

export default Posts 