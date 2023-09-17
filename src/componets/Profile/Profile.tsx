import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileResponseType} from './ProfileAPIClassComponent';



type ProfilePropsType = {
    profile: null | ProfileResponseType
}

export const Profile = (props: ProfilePropsType) => {
    console.log(props.profile)
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};
