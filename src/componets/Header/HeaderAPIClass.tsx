import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {AuthResponseType, DataType} from '../../redux/auth-reducer';



export type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
export type MapDispatchPropsType = {
    setAuthUserData: (data: DataType) => void
}

export type ProfileClassPropsType = MapStatePropsType & MapDispatchPropsType

export class HeaderAPIClass extends React.Component<ProfileClassPropsType > {
    componentDidMount() {
        axios.get<AuthResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setAuthUserData(res.data.data)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

