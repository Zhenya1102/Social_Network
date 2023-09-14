import React from 'react';
import {connect} from 'react-redux';
import {AppDispatch, AppRootState} from '../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from '../../redux/users-reducer';
import {UsersCLassComponent} from './UsersCLassComponent';


const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCLassComponent);
