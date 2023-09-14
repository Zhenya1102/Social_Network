import React from 'react';
import {ResponseType, UsersType} from '../../redux/users-reducer';
import styles from './Users.module.css';
import avatar from '../../assets/images/avatar.jpg';
import axios from 'axios';


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
}

export class UsersCLassComponent extends React.Component<UsersClassPropsType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
        }) // сделали первый запрос сервер о получении данных
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setTotalUserCount(res.data.totalCount)
        }) // установили общее количество пользователей
    }
    onPageChangedClick = (currentPage: number) => {
        this.props.setCurrentPage(currentPage) // изменяем текущую страничку пользователей
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
        })

    }

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        if (pages.length > 40) { // сократили массив до 20 элементов, если он больше 20 элементов
            pages.splice(40) // мутировали исходный массив
        }
        return (
            <div>
                <ul className={styles.pages}>
                    {pages.map((el, index) => {
                        return <li onClick={(e) => this.onPageChangedClick(el)}
                                   className={this.props.currentPage === el ? styles.selected : ''}
                                   key={index}>{el}</li>
                    })}
                </ul>
                <ul>
                    {this.props.users.map(el => {
                        return <li key={el.id}>
                        <span><img className={styles.user_photo}
                                   src={el.photos.small !== null ? el.photos.small : avatar} alt="avatar"/></span>
                            <span>{el.followed ?
                                <button onClick={() => {
                                    this.props.unFollow(el.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    this.props.follow(el.id)
                                }}>Follow</button>}</span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </li>
                    })}
                </ul>
            </div>

        );
    }
}