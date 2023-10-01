import React from 'react';
import styles from './Users.module.css'
import avatar from '../../assets/images/avatar.jpg'
import {NavLink} from 'react-router-dom';
import {UsersType} from '../../redux/users-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';


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

export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    pageSize,
                                                    totalCount,
                                                    currentPage,
                                                    followTC,
                                                    unFollowTC,
                                                    onPageChangedClick,
                                                    followingInProgress
                                                }) => {
    return (
        <div>
            <Paginator
                pageSize={pageSize}
                totalCount={totalCount}
                currentPage={currentPage}
                onPageChangedClick={onPageChangedClick}
                portionSize={10}
            />
            <ul>
                <User users={users}
                      followingInProgress={followingInProgress}
                      followTC={followTC}
                      unFollowTC={unFollowTC}
                />
            </ul>
        </div>
    );
};

