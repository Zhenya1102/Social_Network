import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../redux/store';
import AddMessageForm, {MessageFormDataType} from './AddMessageForm/AddMessageForm';


type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody:string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)

    const addNewMessage = (formData: MessageFormDataType) => {
        props.sendMessage(formData.newMessageBody)
    }

    return (
        <div className={s.dialogsContainer}>
            <ul className={s.dialogs__list}>
                {dialogsElements}
            </ul>
            <ul className={s.messages__list}>
                {messagesElements}
            </ul>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
};



