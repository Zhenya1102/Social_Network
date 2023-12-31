import React from 'react';
import {AppRootState} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {MapStatePropsType, ProfileAPIClassComponent} from './ProfileAPIClassComponent';
import {getProfileTC, getStatusTC, savePhotoTC, saveProfile, updateStatusTC} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {setIsFetching} from '../../redux/users-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


export const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth

    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    getProfileTC,
    getStatusTC,
    updateStatusTC,
    setIsFetching,
    savePhotoTC,
    saveProfile
}), withRouter, withAuthRedirect)(ProfileAPIClassComponent);
