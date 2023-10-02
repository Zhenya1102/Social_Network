import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileResponseType} from './ProfileAPIClassComponent';
import {ProfileFormDataType} from './ProfileInfo/ProfileDataForm';


type ProfilePropsType = {
    profile: null | ProfileResponseType
    status: string
    updateStatusTC: (status: string) => void
    isOwner: boolean
    savePhotoTC: (file: File) => void
    saveProfile: (profile:ProfileFormDataType)=> void
}

export const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatusTC, isOwner, savePhotoTC, saveProfile}) => {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateStatusTC={updateStatusTC}
                isOwner={isOwner}
                savePhoto={savePhotoTC}
                saveProfile={saveProfile}
            />
            <MyPostsContainer/>
        </div>
    );
};
