import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from '../../../redux/state';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';


type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: { type: any, newText?: string }) => void
}



export const MyPosts = (props: MyPostsPropsType) => {
    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch(addPostAC())
        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.dispatch(updateNewPostTextAC(text))
        }
    }

    const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};
