import React from 'react';
import styles from './Users.module.css'
import avatar from '../../assets/images/avatar.jpg'
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {UsersType} from '../../api/api';

type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    onPageChangedClick: (currentPage: number) => void
}

export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize)
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
                    return <li onClick={(e) => props.onPageChangedClick(el)}
                               className={props.currentPage === el ? styles.selected : ''}
                               key={index}>{el}</li>
                })}
            </ul>
            <ul>
                {props.users.map(el => {
                    return <li key={el.id}>
                        <span>
                            <NavLink to={'/profile/' + el.id}>
                                <img className={styles.user_photo}
                                     src={el.photos.small !== null ? el.photos.small : avatar}
                                     alt="avatar"/>
                            </NavLink>
                        </span>
                        <span>{el.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
                                    withCredentials:true,
                                    headers: {'API-KEY': '2eab2f94-9550-4fb4-b555-b5306f680904'}
                                })
                                    .then(res=> {
                                        if (res.data.resultCode === 0) {
                                            props.unFollow(el.id)
                                        }
                                    })
                                }
                            }>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
                                    withCredentials: true,
                                    headers: {'API-KEY': '2eab2f94-9550-4fb4-b555-b5306f680904'}
                                })
                                    .then(res => {
                                        if (res.data.resultCode === 0) {
                                            props.follow(el.id)
                                        }
                                    });
                                }}>Follow</button>}</span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </li>
                })}
            </ul>
        </div>
    );
};

