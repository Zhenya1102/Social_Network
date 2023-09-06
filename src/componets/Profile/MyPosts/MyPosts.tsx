import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    const posts = [
        {id: 1, message: 'What is your name', likesCount: '0'},
        {id: 2, message: 'It`s my first post', likesCount: '23'},
    ]
    const postsElements = posts.map(p=> <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {/*{postsElements}*/}
                {posts.map((el)=> (<Post key={el.id} message={el.message} likesCount={el.likesCount}/>))}
            </div>
        </div>
    );
};
