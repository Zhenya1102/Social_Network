import React from 'react';
import style from './Header.module.css'
import image from './img/01.png'
import {NavLink} from 'react-router-dom';


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <img className={style.header__logo} src={image} alt={'logo'}/>
            <div className={style.login__block}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

