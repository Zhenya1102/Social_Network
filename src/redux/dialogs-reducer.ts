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
    newMessageBody?: string
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
    ]
}

export const dialogsReducer = (state = initialState, action: ActionType):InitialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let body = action.newMessageBody
            return {...state, messages: [...state.messages, {id:6, message:body}]}
        }
        default: {
            return state
        }
    }
}


// action DialogsPage
type ActionType =  SendMessageAC

type SendMessageAC = ReturnType<typeof sendMessageAC>
export const sendMessageAC = (newMessageBody:string) => ({type: 'SEND-MESSAGE', newMessageBody} as const)
