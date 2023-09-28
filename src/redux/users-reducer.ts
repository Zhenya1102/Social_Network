import {AppDispatch} from './redux-store';
import {socialNetworkApi} from '../api/api';
import {Values} from '../componets/common/Utils/utils';
import {updateObjectInArray} from '../utils/object-helpers';

export type FollowType = {
    data: {}
    messages: string[]
    fieldsErrors: []
    resultCode: number
}


export type ResponseType = {
    items: UsersType[]
    totalCount: number
    error: null
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotosType
    status: null | string
    followed: boolean
}

type PhotosType = {
    small: null | string,
    large: null | string
}

type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5, // страниц на ui
    totalCount: 0, // сколько пользователей на странице
    currentPage: 1,// текущая страница
    isFetching: false,// загрузка
    followingInProgress: []
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-USERS': { // установили наших пользователей
            return {...state, users: action.users}
        }
        case 'FOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
            // return  {...state, users: updateObjectInArray(state.users, action.id, 'id', {followed: true})}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
            // return  {...state, users: updateObjectInArray(state.users, action.id, 'id', {followed: false})}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.page}
        }
        case 'SET-TOTAL-USER-COUNT': {
            return {...state, totalCount: action.totalCount}
        }
        case 'SET-IS-FETCHING': { // работа загрузки
            return {...state, isFetching: action.isFetching}
        }
        case 'FOLLOWING-IN-PROGRESS': {
            return {
                ...state, followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        }
    }
    return state
}

type ActionType =
    SetUsers |
    FollowAC |
    UnFollowAC |
    SetCurrentPage |
    SetTotalUserCount |
    SetIsFetching |
    FollowingInProgress

type FollowAC = ReturnType<typeof follow>
export const follow = (id: number) => ({type: 'FOLLOW', id,} as const)

type UnFollowAC = ReturnType<typeof unFollow>
export const unFollow = (id: number) => ({type: 'UNFOLLOW', id} as const)


type SetUsers = ReturnType<typeof setUsers>
export const setUsers = (users: UsersType[]) => ({type: 'SET-USERS', users} as const)

type SetCurrentPage = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) => ({type: 'SET-CURRENT-PAGE', page} as const)

type SetTotalUserCount = ReturnType<typeof setTotalUserCount>
export const setTotalUserCount = (totalCount: number) => ({type: 'SET-TOTAL-USER-COUNT', totalCount} as const)

export type SetIsFetching = ReturnType<typeof setIsFetching>
export const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching} as const)

export type FollowingInProgress = ReturnType<typeof toggleFollowingInProgress>
export const toggleFollowingInProgress = (followingInProgress: boolean, userId: number) => ({
    type: 'FOLLOWING-IN-PROGRESS',
    followingInProgress,
    userId
} as const)


// DAL level
// ThunkCreator(data) => Thunk => dispatch




export const requestGetUsers = (page: number, pageSize: number) => async (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(page))
    const response = await socialNetworkApi.getUsers(page, pageSize)
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUserCount(response.data.totalCount))
    dispatch(setIsFetching(false))
    // сделали первый запрос на сервер о получении данных
}

const followUnfollowFlow = async (dispatch: AppDispatch, id: number, apiMethod:any, actionCreator:any ) => {
    dispatch(toggleFollowingInProgress(true, id))
    const response = await apiMethod(id)
    if (response.data.resultCode === Values.ResultsCode) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingInProgress(false, id))
}

export const followTC = (id: number) => async (dispatch: AppDispatch) => { // подписка
    await followUnfollowFlow(dispatch, id, socialNetworkApi.setFollowed.bind(id), follow)
}

export const unFollowTC = (id: number) => async (dispatch: AppDispatch) => { // отписка
    await followUnfollowFlow(dispatch, id, socialNetworkApi.unFollowed.bind(id), unFollow)
}
