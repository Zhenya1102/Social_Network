import React from 'react';
import {connect} from 'react-redux';
import {AppRootState} from '../../redux/redux-store';

import {UsersAPICLassComponent} from './UsersAPICLassComponent';
import {follow, setCurrentPage, setIsFetching, setTotalUserCount, setUsers, unFollow} from '../../redux/users-reducer';


const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setUsers,
    follow,
    unFollow,
    setCurrentPage,
    setTotalUserCount,
    setIsFetching,
})(UsersAPICLassComponent);
