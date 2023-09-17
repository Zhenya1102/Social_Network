import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li className={s.nav__item}>
                    <NavLink to={'/profile'} activeClassName={s.activeLink} className={s.navLink}>
                        Profile
                    </NavLink>
                </li>
                <li className={s.nav__item}>
                    <NavLink to={'/dialogs'} activeClassName={s.activeLink} className={s.navLink}>
                        <a className={s.nav__link}>Dialogs</a>
                    </NavLink></li>
                <li className={s.nav__item}>
                    <NavLink to={'/users'} activeClassName={s.activeLink} className={s.navLink}>
                        <a className={s.nav__link}>Users</a>
                    </NavLink></li>
                <li className={s.nav__item}>
                    <NavLink to={'/news'} activeClassName={s.activeLink} className={s.navLink}>
                        <a className={s.nav__link}>News</a>
                    </NavLink></li>
                <li className={s.nav__item}>
                    <NavLink to={'/music'} activeClassName={s.activeLink} className={s.navLink}>
                        <a className={s.nav__link}>Music</a>
                    </NavLink></li>
                <li className={s.nav__item}>
                    <NavLink to={'/settings'} activeClassName={s.activeLink} className={s.navLink}>
                        <a className={s.nav__link}>Settings</a>
                    </NavLink></li>
            </ul>
        </nav>
    );
};
