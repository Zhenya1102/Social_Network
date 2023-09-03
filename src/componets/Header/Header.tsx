import React from 'react';
import s from './Header.module.css'
import image from './img/01.png'


export const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__logo}
                 src={image}
                 alt={'logo'}/>
        </header>
    );
};

