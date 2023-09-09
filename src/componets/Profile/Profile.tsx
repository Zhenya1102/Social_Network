import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../redux/state';


type ProfilePropsType = {
    posts: PostsType[]
    // addPost: () => void
    newPostText:string
    // updateNewPostText: (newText: string)=> void
    dispatch: (action:{type:any, newText?:string})=> void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     // addPost={props.addPost}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}
            />
        </div>
    );
};
