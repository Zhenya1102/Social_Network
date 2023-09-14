import React from 'react';
import {connect} from 'react-redux';
import {AppDispatch, AppRootState} from '../../redux/redux-store';
import {followAC, setUsersAC, unFollowAC, UsersType} from '../../redux/users-reducer';
import {UsersCLassComponent} from './UsersCLassComponent';


const mapStateToProps = (state: AppRootState) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCLassComponent);
