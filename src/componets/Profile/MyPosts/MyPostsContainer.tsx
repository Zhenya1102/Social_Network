import React from 'react';
import {MyPosts} from './MyPosts';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';


// MyPostsContainer Контейнерная компонента компоненты MyPosts

type MyPostsContainerPropsType = {
    store: any
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    const state = props.store.getState()


    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
    />;
};
