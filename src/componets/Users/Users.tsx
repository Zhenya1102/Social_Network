import React from 'react';
import styles from './Users.module.css'
import avatar from '../../assets/images/avatar.jpg'
import {NavLink} from 'react-router-dom';
import {UsersType} from '../../redux/users-reducer';



type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
    onPageChangedClick: (currentPage: number) => void
    followingInProgress: number[]
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
                    return <li onClick={() => props.onPageChangedClick(el)}
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
                            <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.unFollowTC(el.id)
                                }
                            }>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.followTC(el.id)
                                }}>Follow</button>}</span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                    </li>
                })}
            </ul>
        </div>
    );
};

