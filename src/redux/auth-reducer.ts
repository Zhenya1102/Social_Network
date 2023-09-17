export type AuthResponseType = {
    data:  DataType
    messages: string []
    fieldsErrors: []
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
            return {...state, ...action.data, isAuth: true}
        }
        default: {
            return state
        }

    }
}


type ActionType = SetAuthUserData

// Actions
type SetAuthUserData = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (data: DataType) => ({type: 'SET-USER-DATA', data} as const)