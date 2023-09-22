import React from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {UsersType} from '../../redux/users-reducer';
import {Redirect} from 'react-router-dom';


type UsersClassPropsType = {
    users: UsersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
    isFetching: boolean
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
}

export class UsersAPICLassComponent extends React.Component<UsersClassPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize) // сделали первый запрос на сервер о получении данных
    }

    onPageChangedClick = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize) // изменяем текущую страничку пользователей
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalCount={this.props.totalCount}
                    currentPage={this.props.currentPage}
                    followTC={this.props.followTC}
                    unFollowTC={this.props.unFollowTC}
                    onPageChangedClick={this.onPageChangedClick}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}
