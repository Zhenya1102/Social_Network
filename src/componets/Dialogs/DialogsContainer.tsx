import React from 'react';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppDispatch, AppRootState} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


const mapStateToProps = (state: AppRootState) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
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


export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)