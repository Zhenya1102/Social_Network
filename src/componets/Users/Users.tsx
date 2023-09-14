import React from 'react';
import styles from './Users.module.css'
import axios from 'axios';
import avatar from '../../assets/images/avatar.jpg'
import {ResponseType, UsersType} from '../../redux/users-reducer';

type UsersPropsType = {
    users: UsersType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
}


export const Users = (props: UsersPropsType) => {
    const getUsers = () => { // We make a request to the server by clicking on the button
        if (props.users.length === 0) {
            axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
                props.setUsers(res.data.items)
            })
        }
    }
    return (
        <div>
            <ul>
                {props.users.map(el => {
                    return <li key={el.id}>
                        <span><img className={styles.user_photo}
                                   src={el.photos.small !== null ? el.photos.small : avatar} alt="avatar"/></span>
                        <span>{el.followed ?
                            <button onClick={() => {
                                props.unFollow(el.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(el.id)
                            }}>Follow</button>}</span>
                        <div>{el.name}</div>
                        <div>{el.status}</div>
                        <span>{'el.location.city'}</span>
                        <span>{'el.location.country'}</span>
                    </li>
                })}
            </ul>
            <button onClick={getUsers}>Get Users</button>
        </div>

    );
};

