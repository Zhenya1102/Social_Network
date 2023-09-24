import React from 'react';
import {sendMessageAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {AppDispatch, AppRootState} from '../../redux/redux-store';
import {Dialogs} from './Dialogs';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


const mapStateToProps = (state: AppRootState) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)