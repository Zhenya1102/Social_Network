import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';




type MyPostsPropsType = {
    posts: PostsType[]
}

export const MyPosts = (props: MyPostsPropsType) => {
    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            alert(text)
        }
    }
    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
