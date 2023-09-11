import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';


// типизация _state
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar:{}
}


export const store = { // store OOP - object
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'What is your name', likesCount: '0'},
                {id: 2, message: 'It`s my first post', likesCount: '23'},
                {id: 3, message: 'Good day', likesCount: '15'}
            ],
            newPostText: 'I am Samurai'
        },
        dialogsPage: {
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
        },
        sideBar:{}
    },
    _callSubscriber(state: StateType) {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer // наблюдатель // button.addEventListener
    },

    dispatch(action: { type: any, newText?: string, body?:string }) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        sidebarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)
    }
}


