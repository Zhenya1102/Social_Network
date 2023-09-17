import React from 'react';
import {AppRootState} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {MapStatePropsType, ProfileAPIClassComponent} from './ProfileAPIClassComponent';
import {setProfile} from '../../redux/profile-reducer';
import { withRouter} from 'react-router-dom';


export const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
      //  id: statae.id
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileAPIClassComponent)

export const ProfileContainer = connect(mapStateToProps, {setProfile})(WithUrlDataContainerComponent);

