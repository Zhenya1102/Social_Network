import {DialogsPageType} from './state';


export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE_BODY': {
            if (action.body) {
                state.newMessageBody = action.body
            }
            return state
        }
        case 'SEND-MESSAGE': {
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.unshift({id: 5, message: body})
            return state
        }
        default: {
            return state
        }
    }
}


// action DialogsPage
type ActionType = UpdateNewMessageBodyAC | SendMessageAC

type UpdateNewMessageBodyAC = ReturnType<typeof updateNewMessageBodyAC>
export const updateNewMessageBodyAC = (body: string) => ({type: 'UPDATE-NEW-MESSAGE_BODY', body} as const)

type SendMessageAC = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => ({type: 'SEND-MESSAGE'} as const)
