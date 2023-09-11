import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppDispatch, AppRootState} from '../../redux/redux-store';


// DialogsContainer Контейнерная компонента компоненты Dialogs
type DialogsPropsType = {}

// export const DialogsContainer = (props: DialogsPropsType) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState()
//                 const onSendMessageClick = () => {
//                     store.dispatch(sendMessageAC())
//                 }
//                 const onNewMessageChange = (body: string) => {
//                     store.dispatch(updateNewMessageBodyAC(body))
//                 }
//                 return (
//                     <Dialogs
//                         updateNewMessageBody={onNewMessageChange}
//                         sendMessage={onSendMessageClick}
//                         dialogs={state.dialogsPage.dialogs}
//                         messages={state.dialogsPage.messages}
//                         newMessageBody={state.dialogsPage.newMessageBody}
//                     />
//                 )
//             }}
//         </StoreContext.Consumer>
//     )
// };

const mapStateToProps = (state: AppRootState) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
