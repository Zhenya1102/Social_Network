import axios from 'axios';
import {AuthResponseType} from '../redux/auth-reducer';
import {FollowType, ResponseType} from '../redux/users-reducer';
import {ProfileResponseType} from '../componets/Profile/ProfileAPIClassComponent';
import {StatusResponseType} from '../redux/profile-reducer';


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
    unFollowed(id: number) {
        return instance.delete<FollowType>(`/follow/${id}`) // отписка
    },
    setFollowed(id: number) {
        return instance.post<FollowType>(`/follow/${id}`, {}) // подписка
    },
    getProfile(userId: string) {
        return instance.get<ProfileResponseType>(`/profile/${userId}`) // получаем профиль по id
    }
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get<ProfileResponseType>(`/profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<StatusResponseType>(`/profile/status`, {status})
    }
}

export const authApi = {
    setAuth() { // авторизация
        return instance.get<AuthResponseType>(`/auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
    },
    loginOut() {
        return instance.delete<AuthResponseType>(`/auth/login`)
    },
}