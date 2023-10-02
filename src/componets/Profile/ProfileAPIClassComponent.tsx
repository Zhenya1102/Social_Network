import React from 'react';
import {Profile} from './Profile';
import {RouteComponentProps} from 'react-router-dom';
import {ProfileFormDataType} from './ProfileInfo/ProfileDataForm';


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
    facebook: null | string
    website: null | string
    vk: null | string
    twitter: null | string
    instagram: null | string
    youtube: null | string
    github: null | string
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
    status: string
    authorizedUserId: null | number
    isAuth: boolean
}
export type MapDispatchPropsType = {
    getProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
    savePhotoTC: (file: File) => void
    saveProfile:(profile:ProfileFormDataType)=> void
}

export type ProfileClassPropsType = MapStatePropsType & MapDispatchPropsType

type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileClassPropsType


export class ProfileAPIClassComponent extends React.Component<CommonPropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(this.props.authorizedUserId)
        }
        this.props.getProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <div>
                <Profile
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatusTC={this.props.updateStatusTC}
                    savePhotoTC={this.props.savePhotoTC}
                    saveProfile={this.props.saveProfile}
                />
            </div>
        );
    }
}


