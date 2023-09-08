let rerenderEntireTree = (state: StateType) => {

}
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

export const state: StateType = {
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
}

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: '4'
    }
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer:()=> void) => {
    rerenderEntireTree = observer // наблюдатель // button.addEventListener
}
