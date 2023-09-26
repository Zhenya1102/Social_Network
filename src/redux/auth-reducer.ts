import {AppDispatch} from './redux-store';
import {authApi} from '../api/api';
import {Values} from '../componets/common/Utils/utils';
import {setIsFetching} from './users-reducer';
import {stopSubmit} from 'redux-form';

export type AuthResponseType = {
    data: DataType
    messages: string []
    fieldsErrors?: []
    resultCode: number
}

export type DataType = {
    id: null | number
    login: null | string
    email: null | string
}

type initialStatePropsType = {
    id: null | number
    email: null | string
    login: null | string
    isFetching: boolean
    isAuth: boolean
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}
export const authReducer = (state: initialStatePropsType = initialState, action: ActionType): initialStatePropsType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data, isAuth: action.isAuth}
        }
        default: {
            return state
        }

    }
}

type ActionType = SetAuthUserData

// Actions
type SetAuthUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: DataType, isAuth: boolean) => ({type: 'SET-USER-DATA', data, isAuth} as const)


//thunks
export const getAuthTC = () => (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    authApi.setAuth()
        .then((res) => {
            if (res.data.resultCode === Values.ResultsCode) {
                dispatch(setAuthUserData(res.data.data, true))
                dispatch(setIsFetching(false))
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    authApi.login(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === Values.ResultsCode) {
                dispatch(getAuthTC())
                dispatch(setIsFetching(false))
            } else {
                const message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logoutTC = () => (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    authApi.loginOut()
        .then((res) => {
            if (res.data.resultCode === Values.ResultsCode) {
                dispatch(setAuthUserData({id: null, login: null, email: null}, false))
                dispatch(setIsFetching(false))
            }
        })
}