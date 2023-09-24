import React from 'react';
import s from './Dialogs.module.css'
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../redux/store';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


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

    const addNewMessage = (formData: FormDataType) => {
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
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};

type FormDataType = {
    newMessageBody: string
}
const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component="textarea"
                    name="newMessageBody"
                    placeholder="Enter your message">
                </Field>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)