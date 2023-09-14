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
}

let initialState = {
    users: [],
    pageSize: 5, // страниц на ui
    totalCount: 0, // сколько пользователей на странице
    currentPage: 3 // текущая страница
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
    }
    return state
}

type ActionType = SetUsers | FollowAC | UnFollowAC | SetCurrentPage | SetTotalUserCountAC

type FollowAC = ReturnType<typeof followAC>
export const followAC = (id: number) => ({type: 'FOLLOW', id,} as const)

type UnFollowAC = ReturnType<typeof unFollowAC>
export const unFollowAC = (id: number) => ({type: 'UNFOLLOW', id} as const)


type SetUsers = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: any) => ({type: 'SET-USERS', users} as const)

type SetCurrentPage = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)

type SetTotalUserCountAC = ReturnType<typeof setTotalUserCountAC>
export const setTotalUserCountAC = (totalCount: number) => ({type: 'SET-TOTAL-USER-COUNT', totalCount} as const)