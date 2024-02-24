import React from 'react';
import Header from '../Header/Header';
import s from './profile.module.css'
import vector from './img/Vector.png'

const Profile = () => {
    return (
        <div>
            <Header />
            <div className={s.headerProfile}>
                <div className={s.blogAva}>
                    <button className={s.buttonProfile}><span className={s.textH3}>Изменить обложку</span> <img src={vector} alt="no foto" /></button>
                </div>
                <div className={s.blogAva2}><img src={s.im} alt="" /></div>
            </div>
        </div>
    );
};

export default Profile;