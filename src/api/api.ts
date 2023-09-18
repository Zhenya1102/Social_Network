import axios from 'axios';


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

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    withCredentials: true,
    headers: {
        "API-KEY": "2eab2f94-9550-4fb4-b555-b5306f680904"
    }
})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<ResponseType>(`/users?page=${currentPage}&count=${pageSize}`)
    }
}
