import {AppRootState} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {HeaderAPIClass} from './HeaderAPIClass';

export const mapStateToProps = (state: AppRootState) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPIClass);
