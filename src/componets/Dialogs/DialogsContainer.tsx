import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

// DialogsContainer Контейнерная компонента компоненты Dialogs
type DialogsPropsType = {
    store: any
}

export const DialogsContainer = (props:DialogsPropsType) => {

    const state = props.store.getState()

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageBody={state.dialogsPage.newMessageBody}
    />;
};
