import {AppDispatch} from './redux-store';
import {getAuthTC} from './auth-reducer';

type initialStatePropsType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}
export const appReducer = (state: initialStatePropsType = initialState, action: ActionType): initialStatePropsType => {
    switch (action.type) {
        case 'SET-INITIALIZED': {
            return {...state, initialized: true}
        }
        default: {
            return state
        }

    }
}

type ActionType = SetInitialized

// Actions
type SetInitialized = ReturnType<typeof setInitialized>
export const setInitialized = () => ({type: 'SET-INITIALIZED'} as const)

export const initializeApp = () => (dispatch: AppDispatch) => {
    const promise = dispatch(getAuthTC())
    Promise.all([promise]).then(()=> {
        dispatch(setInitialized())
    })
}