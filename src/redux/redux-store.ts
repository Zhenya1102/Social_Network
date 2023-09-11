import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({ // отдаем наши reducers
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer
})
// непосредственно создаём store
export const store= createStore(rootReducer) // создаем store

// определить автоматически тип всего объекта состояния
export type AppRootState = ReturnType<typeof rootReducer> // типизируем наш state

// типизация dispatch Redux на уровне Store
// type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>
// export const useAppDispatch = useDispatch<AppDispatchType>


// @ts-ignore
window.store = store;


