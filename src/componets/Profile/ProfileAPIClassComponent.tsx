import React from 'react';
import {Profile} from './Profile';
import { RouteComponentProps} from 'react-router-dom';


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
    getProfileTC: (userId: string) => void
}

export type ProfileClassPropsType = MapStatePropsType & MapDispatchPropsType

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileClassPropsType


export class ProfileAPIClassComponent extends React.Component<CommonPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getProfileTC(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}


