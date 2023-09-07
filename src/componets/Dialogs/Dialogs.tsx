import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../redux/state';


type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const Dialogs = (props:DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)
    return (
        <div className={s.dialogsContainer}>
            <ul className={s.dialogs__list}>
                {dialogsElements}
                {/*{dialogs.map((el)=> {*/}
                {/*    return <Dialog key={el.id} id={el.id} name={el.name} />*/}
                {/*})}*/}
            </ul>
            <ul className={s.messages__list}>
                {messagesElements}
                {/*{messages.map((el)=> {*/}
                {/*    return <Message key={el.id} message={el.message}/>*/}
                {/*})}*/}
            </ul>
        </div>
    );
};
