import React from 'react';
import {AppRootState} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {MapStatePropsType, ProfileAPIClassComponent} from './ProfileAPIClassComponent';
import {getProfileTC} from '../../redux/profile-reducer';
import { withRouter} from 'react-router-dom';
import {setIsFetching} from '../../redux/users-reducer';


export const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        isAuth: state.auth.isAuth
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileAPIClassComponent)

export const ProfileContainer = connect(mapStateToProps, {getProfileTC,setIsFetching })(WithUrlDataContainerComponent);

