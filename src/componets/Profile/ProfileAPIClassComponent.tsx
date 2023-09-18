import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {RouteComponentProps} from 'react-router-dom';


export type ProfileResponseType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType

}
export type ContactsType = {
    facebook: string
    website: null | string
    vk: string
    twitter: string
    instagram: string
    youtube: null | string
    github: string
    mainLink: null | string
}
export type PhotosType = {
    small: null | string
    large: null | string
}

// Типизация для решения проблемы с match и userId
type PathParamsType = {
    userId: string
}

export type MapStatePropsType = {
    profile: null | ProfileResponseType
    isFetching: boolean
}
export type MapDispatchPropsType = {
    setProfile: (profile: ProfileResponseType) => void
    setIsFetching: (isFetching: boolean) => void
}

export type ProfileClassPropsType = MapStatePropsType & MapDispatchPropsType

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileClassPropsType


// 1 ) делаем запрос авторизации (мы это или не мы). В ответе получаем профайл (в котором сидит айдишка)

export class ProfileAPIClassComponent extends React.Component<CommonPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        let userId = this.props.match.params.userId;
        axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId || 29302}`)
            .then(res => {
                this.props.setProfile(res.data)
                this.props.setIsFetching(false)
            })

    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

