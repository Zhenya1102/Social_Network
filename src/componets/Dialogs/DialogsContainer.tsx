import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';


// DialogsContainer Контейнерная компонента компоненты Dialogs
type DialogsPropsType = {}

export const DialogsContainer = (props: DialogsPropsType) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState()
                const onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }
                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }
                return (
                    <Dialogs updateNewMessageBody={onNewMessageChange}
                             sendMessage={onSendMessageClick}
                             dialogs={state.dialogsPage.dialogs}
                             messages={state.dialogsPage.messages}
                             newMessageBody={state.dialogsPage.newMessageBody}
                    />
                )
            }}
        </StoreContext.Consumer>
    )
};


