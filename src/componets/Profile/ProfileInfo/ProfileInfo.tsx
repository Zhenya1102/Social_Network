import React from 'react';
import s from '../Profile.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.content__image} src={'https://s.ek.ua/posts/files/2536/wide_pic.jpg'} alt={'image'}/>
            </div>
            <div>ava + description</div>
        </div>
    );
};