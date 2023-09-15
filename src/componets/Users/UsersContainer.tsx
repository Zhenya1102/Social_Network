import React from 'react';
import {connect} from 'react-redux';
import {AppDispatch, AppRootState} from '../../redux/redux-store';
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UsersType
} from '../../redux/users-reducer';
import {UsersAPICLassComponent} from './UsersAPICLassComponent';


const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPICLassComponent);
