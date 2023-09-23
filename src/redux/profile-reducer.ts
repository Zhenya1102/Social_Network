import {ProfileResponseType} from '../componets/Profile/ProfileAPIClassComponent';
import {AppDispatch} from './redux-store';
import {profileApi, socialNetworkApi} from '../api/api';
import {setIsFetching} from './users-reducer';
import {Values} from '../componets/common/Utils/utils';

type PostsType = {
    id: number
    message: string,
    likesCount: string
}

type InitialStateType = {
    posts: PostsType[]
    newPostText: string
    profile: null | ProfileResponseType
    isFetching: false
    status: string
}
export type StatusResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

const initialState: InitialStateType = {
    posts: [
        {id: 1, message: 'What is your name', likesCount: '0'},
        {id: 2, message: 'It`s my first post', likesCount: '23'},
        {id: 3, message: 'Good day', likesCount: '15'}
    ],
    newPostText: 'I am Samurai',
    profile: null,
    isFetching: false,
    status: '',
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        default: {
            return state
        }
    }
}


// action ProfilePage
type ActionType = SetProfile | AddPostAC | UpdateNewPostTextAC | SetStatus

type AddPostAC = ReturnType<typeof addPostAC>
export const addPostAC = () => ({type: 'ADD-POST'} as const)

type UpdateNewPostTextAC = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text} as const)


export type SetProfile = ReturnType<typeof setProfile>
export const setProfile = (profile: ProfileResponseType) => ({type: 'SET-USER-PROFILE', profile} as const)

export type SetStatus = ReturnType<typeof setStatus>
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)

//thunks
export const getProfileTC = (userId: string) => (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    socialNetworkApi.getProfile(userId)
        .then(res => {
            dispatch(setProfile(res.data))
            dispatch(setIsFetching(false))
        })
}

export const getStatusTC = (userId:string) => (dispatch: AppDispatch) => {
    profileApi.getStatus(userId)
        .then(res => {
            dispatch(setStatus(res.data))
        })
}

export const updateStatusTC = (status:string) => (dispatch: AppDispatch) => {
    profileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === Values.ResultsCode) {
                dispatch(setStatus(status))
            }
        })
}