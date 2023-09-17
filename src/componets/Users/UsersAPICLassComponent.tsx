import React from 'react';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';

export type ResponseType = {
    items: UsersType[]
    totalCount: number
    error: null
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosType
    status: null | string
    followed: boolean
}

type PhotosType = {
    small: null | string,
    large: null | string
}

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
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setIsFetching(false)
        }) // сделали первый запрос сервер о получении данных
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setTotalUserCount(res.data.totalCount)
            this.props.setIsFetching(false)
        }) // установили общее количество пользователей
    }

    onPageChangedClick = (currentPage: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(currentPage) // изменяем текущую страничку пользователей
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then((res) => {
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