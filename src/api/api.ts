import axios from 'axios';
import {AuthResponseType} from '../redux/auth-reducer';
import {FollowType, ResponseType} from '../redux/users-reducer';
import {ProfileResponseType} from '../componets/Profile/ProfileAPIClassComponent';


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '2eab2f94-9550-4fb4-b555-b5306f680904'
    }
})

export const socialNetworkApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseType>(`/users?page=${currentPage}&count=${pageSize}`) // взяли юзеров в сервера
    },
    setAuth() { // авторизация
        return instance.get<AuthResponseType>(`/auth/me`)
    },
    unFollowed(id: number) {
        return instance.delete<FollowType>(`/follow/${id}`) // отписка
    },
    setFollowed(id: number) {
        return instance.post<FollowType>(`/follow/${id}`, {}) // подписка
    },
    getProfile(userId:string) {
        return instance.get<ProfileResponseType>(`/profile/${userId || 29302}`) // получаем профиль по id
    }
}
