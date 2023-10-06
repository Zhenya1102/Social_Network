import React, {ChangeEvent} from 'react';
import s from '../Profile.module.css';
import userPhoto from '../../../assets/images/avatar.jpg';
import {Contact} from './Contact';
import {ProfileStatus} from './ProfileStatus';
import {ContactsType, ProfileResponseType} from '../ProfileAPIClassComponent';
import style from '../Profile.module.css'


type ProfileDataPropsType = {
    profile: ProfileResponseType
    isOwner: boolean
    onMainPhotoSelected:(event: ChangeEvent<HTMLInputElement>)=> void
    status: string
    updateStatusTC: (status:string)=> void
    goToEditMode: ()=> void
}

type ContactKeys = keyof ContactsType

export const ProfileData:React.FC<ProfileDataPropsType> = ({profile, isOwner, onMainPhotoSelected, status, updateStatusTC, goToEditMode}) => {
    return (
        <div className={style.profile_data}>
            <img className={s.userPhoto} src={profile.photos.large || userPhoto} alt="photoLarge"/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
            <div>Full Name: <span>{profile.fullName}</span></div>
            <div>About me: <span>{profile.aboutMe}</span></div>
            <div>Looking for a job: <span>{profile.lookingForAJob ? 'Yes' : 'No'}</span></div>
            {profile.lookingForAJob && <div>My professional skills: <span>{profile.lookingForAJobDescription}</span></div>}
            <div>Contacts: {Object.keys(profile.contacts).map((key)=> {
                return <Contact
                    key={key}
                    contactTitle={key}
                    contactValue={profile.contacts[key as ContactKeys]}
                />
            })}</div>
            <ProfileStatus
                status={status}
                updateStatusTC={updateStatusTC}
            />
        </div>
    );
};

