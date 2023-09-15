import React from 'react';
import style from '../../Users/Users.module.css';
import preloader from '../../../assets/images/spiner.svg';

export const Preloader = () => {
    return (
        <div>
            <img className={style.preloader} src={preloader} alt='preloader'/>
        </div>
    );
};
