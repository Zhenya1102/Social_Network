
type MessagesType = {
    id: number
    message: string
}
type DialogsType = {
    id: number
    name: string
}

type InitialStateType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageBody: string
}

const initialState: InitialStateType = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Im fine, Thanks'},
        {id: 4, message: 'Goodbye!'}
    ],
    dialogs: [
        {id: 1, name: 'Zhenya'},
        {id: 2, name: 'Diana'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Svetlana'}
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state= initialState, action: ActionType) => {
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
