import {ProfileResponseType} from '../componets/Profile/ProfileAPIClassComponent';

type PostsType = {
    id: number
    message: string,
    likesCount: string
}

type InitialStateType = {
    posts: PostsType[]
    newPostText: string
    profile: null | ProfileResponseType
}

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'What is your name', likesCount: '0'},
        {id: 2, message: 'It`s my first post', likesCount: '23'},
        {id: 3, message: 'Good day', likesCount: '15'}
    ],
    newPostText: 'I am Samurai',
    profile: null
}


export const profileReducer = (state:InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'ADD-POST': {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '4'
            }
            const newPosts = [newPost, ...state.posts]
            return {...state, posts: newPosts, newPostText: ''}
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        default: {
            return state
        }
    }
}


// action ProfilePage
type ActionType = SetProfile | AddPostAC | UpdateNewPostTextAC

type AddPostAC = ReturnType<typeof addPostAC>
export const addPostAC = () => ({type: 'ADD-POST'} as const)

type UpdateNewPostTextAC = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)


export type SetProfile = ReturnType<typeof setProfile>
export const setProfile = (profile: ProfileResponseType) => ({type: 'SET-USER-PROFILE', profile} as const)