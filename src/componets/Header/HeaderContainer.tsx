import {AppRootState} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {HeaderAPIClass} from './HeaderAPIClass';
import {logoutTC} from '../../redux/auth-reducer';

export const mapStateToProps = (state: AppRootState) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {logoutTC})(HeaderAPIClass);
