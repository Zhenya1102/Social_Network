import React, {ChangeEvent, useState} from 'react';
import s from '../Profile.module.css';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileResponseType} from '../ProfileAPIClassComponent';
import {ProfileData} from './ProfileData';
import {ProfileDataFormReduxForm, ProfileFormDataType} from './ProfileDataForm';
import style from '../Profile.module.css'

type ProfileInfoPropsType = {
    profile: null | ProfileResponseType
    status:string
    updateStatusTC:(status:string) => void
    isOwner: boolean
    savePhoto:(file: File)=> void
    saveProfile: (profile:ProfileFormDataType)=> void
}

export const ProfileInfo:React.FC<ProfileInfoPropsType> = ({profile,status, updateStatusTC , isOwner, savePhoto, saveProfile}) => {
    const [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.files && event.currentTarget.files.length) {
            savePhoto(event.currentTarget.files[0])
        }
    }
    const onSubmit = (formData: ProfileFormDataType) => {
        saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div className={style.profile}>
            <div>
                <img className={s.content__image} src={'https://s.ek.ua/posts/files/2536/wide_pic.jpg'} alt={'avatar'}/>
            </div>
            <div className={s.bold}>
                {editMode ? <ProfileDataFormReduxForm
                    initialValues={profile}
                    onSubmit={onSubmit}
                    profile={profile}
                /> : <ProfileData
                    goToEditMode={()=>{setEditMode(true)}}
                    profile={profile}
                    status={status}
                    updateStatusTC={updateStatusTC}
                    isOwner={isOwner}
                    onMainPhotoSelected={onMainPhotoSelected}
                />}
            </div>
        </div>
    );
};

