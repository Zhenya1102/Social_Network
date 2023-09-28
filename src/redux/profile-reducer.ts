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

export type InitialStateType = {
    posts: PostsType[]
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
                message: action.newPostText,
                likesCount: '4'
            }
            const newPosts = [newPost, ...state.posts]
            return {...state, posts: newPosts}
        }
        case 'DELETE-POST': {
            return {...state, posts: state.posts.filter(el => el.id !== action.postId)}
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
type ActionType = SetProfile | AddPostAC | SetStatus | DeletePost

type AddPostAC = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => ({type: 'ADD-POST', newPostText} as const)

type DeletePost = ReturnType<typeof deletePost>
export const deletePost = (postId: number) => ({type: 'DELETE-POST', postId} as const)

export type SetProfile = ReturnType<typeof setProfile>
export const setProfile = (profile: ProfileResponseType) => ({type: 'SET-USER-PROFILE', profile} as const)

export type SetStatus = ReturnType<typeof setStatus>
export const setStatus = (status: string) => ({type: 'SET-STATUS', status} as const)

//thunks
export const getProfileTC = (userId: string) => async (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    const response = await socialNetworkApi.getProfile(userId)
    dispatch(setProfile(response.data))
    dispatch(setIsFetching(false))
}

export const getStatusTC = (userId: string) => async (dispatch: AppDispatch) => {
    const response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatusTC = (status: string) => async (dispatch: AppDispatch) => {
    const response = await profileApi.updateStatus(status)
    if (response.data.resultCode === Values.ResultsCode) {
        dispatch(setStatus(status))
    }
}