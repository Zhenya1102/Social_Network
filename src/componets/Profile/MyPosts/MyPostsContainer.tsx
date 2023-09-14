import React from 'react';
import {MyPosts} from './MyPosts';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppDispatch, AppRootState} from '../../../redux/redux-store';




// MyPostsContainer Контейнерная компонента компоненты MyPosts

const mapStateToProps = (state: AppRootState) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        updateNewPostText: (text:string)=> {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)