import React from 'react';
import preloader from '../../../assets/images/spiner.svg';
import style from '../Preloader/Preloader.module.css'

export const Preloader = () => {
    return (
        <div className={style.sample__spinner}>
            <img className={style.preloader} src={preloader} alt='preloader'/>
        </div>
    );
};
