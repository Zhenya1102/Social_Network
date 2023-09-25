import React from 'react';
import style from './Header.module.css'
import image from './img/01.png'
import {NavLink} from 'react-router-dom';


type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logoutTC: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <img className={style.header__logo} src={image} alt={'logo'}/>
            <div className={style.login__block}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logoutTC}>Log Out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

