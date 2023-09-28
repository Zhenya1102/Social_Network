import React from 'react';
import styles from './Users.module.css'
import avatar from '../../assets/images/avatar.jpg'
import {NavLink} from 'react-router-dom';
import {UsersType} from '../../redux/users-reducer';


type UserPropsType = {
    users: UsersType[]
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
    followingInProgress: number[]
}

export const User: React.FC<UserPropsType> = ({
                                                  users,
                                                  followTC,
                                                  unFollowTC,
                                                  followingInProgress
                                              }) => {
    return (
        <ul>
            {users.map(el => {
                return <li key={el.id}>
                        <span>
                            <NavLink to={'/profile/' + el.id}>
                                <img className={styles.user_photo}
                                     src={el.photos.small !== null ? el.photos.small : avatar}
                                     alt="avatar"/>
                            </NavLink>
                        </span>
                    <span>{el.followed ?
                        <button disabled={followingInProgress.some(id => id === el.id)} onClick={() => {
                            unFollowTC(el.id)
                        }
                        }>Unfollow</button> :
                        <button disabled={followingInProgress.some(id => id === el.id)} onClick={() => {
                            followTC(el.id)
                        }}>Follow</button>}</span>
                    <div>{el.name}</div>
                    <div>{el.status}</div>
                </li>
            })}
        </ul>
    );
};

