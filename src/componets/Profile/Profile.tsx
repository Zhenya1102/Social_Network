import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileResponseType} from './ProfileAPIClassComponent';



type ProfilePropsType = {
    profile: null | ProfileResponseType
    status:string
    updateStatusTC:(status:string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusTC={props.updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    );
};
