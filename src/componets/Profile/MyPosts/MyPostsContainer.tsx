import React from 'react';
import {MyPosts} from './MyPosts';
import {addPostAC} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppDispatch, AppRootState} from '../../../redux/redux-store';




// MyPostsContainer Контейнерная компонента компоненты MyPosts

const mapStateToProps = (state: AppRootState) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)