import React from 'react';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {usersApi, UsersType} from '../../api/api';



type UsersClassPropsType = {
    users: UsersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    isFetching: boolean
}

export class UsersAPICLassComponent extends React.Component<UsersClassPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUserCount(res.data.totalCount)
                this.props.setIsFetching(false)
            }) // сделали первый запрос на сервер о получении данных
    }
    onPageChangedClick = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage) // изменяем текущую страничку пользователей
        usersApi.getUsers(currentPage, this.props.pageSize)
            .then((res) => {
                this.props.setUsers(res.data.items)
                this.props.setIsFetching(false)
            })
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
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    onPageChangedClick={this.onPageChangedClick}
                />
            </>
        );
    }
}