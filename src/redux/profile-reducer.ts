import {ProfilePageType} from './state';

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '4'
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            if (action.newText) {
                state.newPostText = action.newText
            }
            return state
        }
        default: {
            return state
        }
    }
}


// action ProfilePage
type ActionType = AddPostAC | UpdateNewPostTextAC

type AddPostAC = ReturnType<typeof addPostAC>
export const addPostAC = () => ({type: 'ADD-POST'} as const)

type UpdateNewPostTextAC = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)
