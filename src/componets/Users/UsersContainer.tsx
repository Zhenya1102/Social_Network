import React from 'react';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {UsersAPICLassComponent} from './UsersAPICLassComponent';
import {
    follow, followTC, getUsers,
    unFollow, unFollowTC
} from '../../redux/users-reducer';


const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    getUsers, // ThunkCreator
    followTC,
    unFollowTC
})(UsersAPICLassComponent);