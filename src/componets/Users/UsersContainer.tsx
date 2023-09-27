import React from 'react';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';
import {UsersAPICLassComponent} from './UsersAPICLassComponent';
import {
    follow, followTC, requestGetUsers,
    unFollow, unFollowTC
} from '../../redux/users-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors';

// Использовали созданные селекторы для передачи данных в компонент
const mapStateToProps = (state: AppRootState) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    follow,
    unFollow,
    requestGetUsers, // ThunkCreator
    followTC,
    unFollowTC
}), withAuthRedirect)(UsersAPICLassComponent)