import React from 'react';
import styles from './Paginator.module.css'


type PaginatorPropsType = {
    // users: UsersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChangedClick: (currentPage: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({pageSize, totalCount, currentPage, onPageChangedClick}) => {
    const pagesCount = Math.ceil(totalCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <ul className={styles.pages}>
            {pages.map((el, index) => {
                return <li onClick={() => onPageChangedClick(el)}
                           className={currentPage === el ? styles.selected : ''}
                           key={index}>{el}</li>
            })}
        </ul>
    );
};

