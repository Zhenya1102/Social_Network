import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message:string
    likesCount: string
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <img src={'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg'} alt={'image'}/>
            <span>{props.message}</span>
            <div>likes:{props.likesCount}</div>
        </div>
    );
};
