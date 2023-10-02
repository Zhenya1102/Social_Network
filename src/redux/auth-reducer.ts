import {AppDispatch} from './redux-store';
import {authApi, securityApi} from '../api/api';
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
    captchaUrl: null | string
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}
export const authReducer = (state: initialStatePropsType = initialState, action: ActionType): initialStatePropsType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data, isAuth: action.isAuth}
        }
        case 'GET-CAPTCHA-URL-SUCCESS': {
            return {...state, captchaUrl: action.payload.captchaUrl}
        }
        default: {
            return state
        }

    }
}

type ActionType = SetAuthUserData | GetCaptchaUrlSuccess

// Actions
type SetAuthUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: DataType, isAuth: boolean) => ({type: 'SET-USER-DATA', data, isAuth} as const)

type GetCaptchaUrlSuccess = ReturnType<typeof getCaptchaUrlSuccess>
export const getCaptchaUrlSuccess = (captchaUrl:string) => ({type: 'GET-CAPTCHA-URL-SUCCESS', payload:{captchaUrl}} as const)


//thunks
export const getAuthTC = () => async (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    const response = await authApi.setAuth()
    if (response.data.resultCode === Values.ResultsCode) {
        dispatch(setAuthUserData(response.data.data, true))
        dispatch(setIsFetching(false))
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha:string | null) => async (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    const response = await authApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === Values.ResultsCode) {
        await dispatch(getAuthTC())
        dispatch(setIsFetching(false))
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutTC = () => async (dispatch: AppDispatch) => {
    dispatch(setIsFetching(true))
    const response = await authApi.loginOut()
    if (response.data.resultCode === Values.ResultsCode) {
        dispatch(setAuthUserData({id: null, login: null, email: null}, false))
        dispatch(setIsFetching(false))
    }
}

export const getCaptchaUrl = () => async (dispatch: AppDispatch) => {
    const response = await securityApi.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(response.data.url))
}