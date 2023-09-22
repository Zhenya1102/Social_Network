import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRootState} from '../redux/redux-store';


type MapStateToProps = {
    isAuth: boolean
}

export const mapStateToProps = (state: AppRootState): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStateToProps) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}