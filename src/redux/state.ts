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
export const addPost = (postMessage:string) => {
    const newPost = {
        id: 5,
        message: postMessage,
        likesCount: '4'
    }
    state.profilePage.posts.push(newPost)
}