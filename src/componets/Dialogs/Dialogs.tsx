import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';


export const Dialogs = () => {
    const dialogs = [
        {id: 1, name: 'Zhenya'},
        {id: 2, name: 'Diana'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Svetlana'}
    ]
    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Im fine, Thanks'},
        {id: 4, message: 'Goodbye!'}
    ]
    const dialogsElements = dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = messages.map(m => <Message key={m.id} message={m.message}/>)
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
