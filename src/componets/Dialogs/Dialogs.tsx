import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../redux/state';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';


type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody:string
    dispatch: (action:{type:any, newText?:string, body?:string})=> void
}

export const Dialogs = (props:DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.messages.map(m => <Message key={m.id} message={m.message}/>)
    const newMessageBody = props.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <div className={s.dialogsContainer}>
            <ul className={s.dialogs__list}>
                {dialogsElements}
            </ul>
            <ul className={s.messages__list}>
                {messagesElements}
            </ul>
            <div>
                <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder={'Enter your message'}></textarea></div>
                <div><button onClick={onSendMessageClick}>Send Message</button></div>
            </div>
        </div>
    );
};
