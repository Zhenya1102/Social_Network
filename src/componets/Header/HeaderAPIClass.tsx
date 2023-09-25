import React from 'react';
import {Header} from './Header';






export type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
export type MapDispatchPropsType = {
    getAuthTC: () => void
    logoutTC:()=> void
}

export type ProfileClassPropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderAPIClass extends React.Component<ProfileClassPropsType > {
    componentDidMount() {
        this.props.getAuthTC()
        this.props.logoutTC()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logoutTC={this.props.logoutTC}/>
    }
}

