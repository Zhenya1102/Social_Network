import {AnyAction, combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {ThunkDispatch} from 'redux-thunk';
import {usersReducer} from './users-reducer';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({ // отдаем наши reducers
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer
})
// непосредственно создаём store

export const store: ReduxStoreType = createStore(rootReducer) // создаем store

export type ReduxStoreType = Store<AppRootState & {
    dispatch: AppDispatch
}>

// определить автоматически тип всего объекта состояния
export type AppRootState = ReturnType<typeof rootReducer> // типизируем наш state
export type AppDispatch = ThunkDispatch<AppRootState, void, AnyAction>;


// типизация dispatch Redux на уровне Store
// type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>
// export const useAppDispatch = useDispatch<AppDispatchType>


// @ts-ignore
window.store = store; // добавляем наш store глобально в window


