import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './NavBar.module.css'
export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <NavLink  to={'/profile'} activeClassName={s.activeLink} className={s.navLink}>
                    <li className={s.nav__item}><a className={s.nav__link}>Profile</a></li>
                </NavLink>
                <NavLink to={'/dialogs'} activeClassName={s.activeLink} className={s.navLink}>
                    <li className={s.nav__item}><a className={s.nav__link}>Dialogs</a></li>
                </NavLink>
                <NavLink to={'/news'} activeClassName={s.activeLink} className={s.navLink}>
                    <li className={s.nav__item}><a className={s.nav__link}>News</a></li>
                </NavLink>
                <NavLink to={'/music'} activeClassName={s.activeLink} className={s.navLink}>
                    <li className={s.nav__item}><a className={s.nav__link}>Music</a></li>
                </NavLink>
                <NavLink to={'/settings'} activeClassName={s.activeLink} className={s.navLink}>
                    <li className={s.nav__item}><a className={s.nav__link}>Settings</a></li>
                </NavLink>
            </ul>
        </nav>
    );
};
