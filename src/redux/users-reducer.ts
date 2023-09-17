import {UsersType} from '../componets/Users/UsersAPICLassComponent';


type InitialStateType = {
    users: UsersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

let initialState = {
    users: [],
    pageSize: 5, // страниц на ui
    totalCount: 0, // сколько пользователей на странице
    currentPage: 1,// текущая страница
    isFetching: false
}


export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-USERS': { // установили наших пользователей
            return {...state, users: action.users}
        }
        case 'FOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: true} : el)}
        }
        case 'UNFOLLOW': {
            return {...state, users: state.users.map(el => el.id === action.id ? {...el, followed: false} : el)}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USER-COUNT': {
            return {...state, totalCount: action.totalCount}
        }
        case 'SET-IS-FETCHING': { // работа загрузки
            return {...state, isFetching: action.isFetching}
        }
    }
    return state
}

type ActionType = SetUsers | FollowAC | UnFollowAC | SetCurrentPage | SetTotalUserCount | SetIsFetching

type FollowAC = ReturnType<typeof follow>
export const follow = (id: number) => ({type: 'FOLLOW', id,} as const)

type UnFollowAC = ReturnType<typeof unFollow>
export const unFollow = (id: number) => ({type: 'UNFOLLOW', id} as const)


type SetUsers = ReturnType<typeof setUsers>
export const setUsers = (users: UsersType[]) => ({type: 'SET-USERS', users} as const)

type SetCurrentPage = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)

type SetTotalUserCount = ReturnType<typeof setTotalUserCount>
export const setTotalUserCount = (totalCount: number) => ({type: 'SET-TOTAL-USER-COUNT', totalCount} as const)

type SetIsFetching = ReturnType<typeof setIsFetching>
export const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching} as const)