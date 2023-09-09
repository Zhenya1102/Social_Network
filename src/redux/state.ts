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
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export const store = {
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
            ]
        }
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

    addPost() {
        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: '4'
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    dispatch(action:{type:any, newText?:string}) {
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: '4'
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            if (action.newText) {
                this._state.profilePage.newPostText = action.newText
            }
            this._callSubscriber(this._state)
        }
    }
}
//