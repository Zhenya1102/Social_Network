import React from 'react';
import s from '../Dialogs.module.css';

type MessagePropsType = {
    message: string
}

export const Message = (props:MessagePropsType) => {
    return (
        <li className={s.message}>{props.message}</li>
    );
};
