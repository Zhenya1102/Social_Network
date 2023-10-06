import React, {useState} from 'react';
import styles from './Paginator.module.css'
import cn from 'classnames'

type PaginatorPropsType = {
    pageSize: number
    totalCount: number
    currentPage: number
    onPageChangedClick: (currentPage: number) => void
    portionSize: number
}

export const Paginator: React.FC<PaginatorPropsType> = ({
                                                            pageSize,
                                                            totalCount,
                                                            currentPage,
                                                            onPageChangedClick,
                                                            portionSize = 10
                                                        }) => {

    const pagesCount = Math.ceil(totalCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && <button onClick={()=> setPortionNumber(portionNumber - 1)}>PREV</button>}
            <ul className={styles.pages}>
                {pages.filter(p=> p >= leftPortionPageNumber && p<= rightPortionPageNumber).map((el, index) => {
                    return <li onClick={() => onPageChangedClick(el)}
                               className={cn({[styles.selectedPage]: currentPage === el}, styles.pages)}
                               key={index}>{el}</li>
                })}
            </ul>
            {portionCount > portionNumber && <button onClick={()=> {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    );
};

