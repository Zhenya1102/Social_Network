import React from 'react';
import {ResponseType, UsersType} from '../../redux/users-reducer';
import styles from './Users.module.css';
import avatar from '../../assets/images/avatar.jpg';
import axios from 'axios';


type UsersClassPropsType = {
    users: UsersType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: UsersType[]) => void
}

export class UsersCLassComponent extends React.Component<UsersClassPropsType> {
    componentDidMount() {
        axios.get<ResponseType>('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            this.props.setUsers(res.data.items)
        })
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.users?.map(el => {
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
                            <span>{'el.location.city'}</span>
                            <span>{'el.location.country'}</span>
                        </li>
                    })}
                </ul>
            </div>

        );
    }
}