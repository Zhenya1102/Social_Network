import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../redux/store';
import {Redirect} from 'react-router-dom';


type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)
    const newMessageBody = props.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.updateNewMessageBody(body)
    }
    if (!props.isAuth) return <Redirect to={'/login'}/> // если нет регистрации - редирект на login

    return (
        <div className={s.dialogsContainer}>
            <ul className={s.dialogs__list}>
                {dialogsElements}
            </ul>
            <ul className={s.messages__list}>
                {messagesElements}
            </ul>
            <div>
                <div><textarea onChange={onNewMessageChange} value={newMessageBody}
                               placeholder={'Enter your message'}></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send Message</button>
                </div>
            </div>
        </div>
    );
};
