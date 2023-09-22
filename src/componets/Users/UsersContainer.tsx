import React from 'react';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {UsersAPICLassComponent} from './UsersAPICLassComponent';
import {
    follow, followTC, getUsers,
    unFollow, unFollowTC
} from '../../redux/users-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, {
    follow,
    unFollow,
    getUsers, // ThunkCreator
    followTC,
    unFollowTC
}), withAuthRedirect)(UsersAPICLassComponent)