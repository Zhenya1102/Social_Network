import React from 'react';
import s from '../Profile.module.css';


type ContactPropsType = {
    contactTitle: string
    contactValue: any
}


export const Contact:React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <span>{contactTitle}: </span>
            <span>{contactValue}</span>
        </div>
    );
};
