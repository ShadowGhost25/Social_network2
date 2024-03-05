import s from './posts.module.css'
import foto from './img/groupAva.png'
import posts from './img/posts.png'
import like from './img/like.png'
import share from './img/share.png'
import comment from './img/comment.png'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { fetchPosts } from '../../redux/slices/posts'

const Posts = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.posts)

    const isPostsLoading = posts.status === 'loading'

    console.log(posts)
    React.useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    console.log(posts)
    return (
        <>
        {(isPostsLoading ? [Array(1)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
                'loaded'
            ) : (
                <div key={obj._id} className={s.mainPosts}>
                    <div className={s.posts}>
                        <div className={s.postsHeader}>
                            <div>
                                <img className={s.foto} src={foto} alt="" />
                            </div>
                            <div className={s.name}>
                                <h2 className={s.h2}>{obj.title}</h2>
                                <span className={s.text}> 2 декабря 2023 в 19:10</span>
                                <div>{obj.text}</div>
                            </div>
                        </div>
                        <div className={s.postsMain}>
                            <img className={s.postsFoto} src={obj.imageUrl} alt="no img" />
                        </div>
                        <div className={s.buttonFotter}>
                            <button className={s.buttonClick}><img src={like} alt="" /><span className={s.textButton}> Нравится</span></button>
                            <button className={s.buttonClick}><img src={share} alt="" /><span className={s.textButton}> Комментарий</span></button>
                            <button className={s.buttonClick}><img src={comment} alt="" /><span className={s.textButton}> Поделиться</span></button>
                        </div>
                    </div>
                </div>
            ),
        )}
        </>
    )
}

export default Posts 