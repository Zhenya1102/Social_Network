import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


type DialogPropsType = {
    name: string
    id: number
}

export const Dialog = (props: DialogPropsType) => {
    const path = `/dialogs/${props.id}`
    return (
        <li className={s.dialogItem}><NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink></li>
    );
};
