import React from 'react';
import s from '../Profile.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileResponseType} from '../ProfileAPIClassComponent';
import {ProfileStatus} from './ProfileStatus';


type ProfileInfoPropsType = {
    profile: null | ProfileResponseType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.content__image} src={'https://s.ek.ua/posts/files/2536/wide_pic.jpg'} alt={'avatar'}/>
            </div>
            <div>
                {props.profile.photos.large ? <img src={props.profile.photos.large} alt="photoLarge"/> : <div>No photo</div>}
                {/*<div>{props.profile.fullName}</div>*/}
                {/*<div>{props.profile.aboutMe}</div>*/}
                {/*<div>{props.profile.lookingForAJobDescription}</div>*/}
                <ProfileStatus status={'Hello my friends'}/>
            </div>
        </div>
    );
};

