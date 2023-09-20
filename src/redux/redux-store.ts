import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {ThunkDispatch} from 'redux-thunk';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({ // отдаем наши reducers
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
// непосредственно создаём store

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware)); // создаем store


// определить автоматически тип всего объекта состояния
export type AppRootState = ReturnType<typeof rootReducer> // типизируем наш state
export type AppDispatch = ThunkDispatch<AppRootState, void, AnyAction>;

// export type ReduxStoreType = Store<AppRootState & {
//     dispatch: AppDispatch
// }>
//
// типизация dispatch Redux на уровне Store
// type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>
// export const useAppDispatch = useDispatch<AppDispatchType>


// @ts-ignore
window.store = store; // добавляем наш store глобально в window


