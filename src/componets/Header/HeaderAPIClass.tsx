import React from 'react';
import {Header} from './Header';
import {DataType} from '../../redux/auth-reducer';
import {socialNetworkApi} from '../../api/api';
import {Values} from '../common/Utils/utils';



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
        socialNetworkApi.setAuth()
            .then((res) => {
                if (res.data.resultCode === Values.ResultsCode) {
                    this.props.setAuthUserData(res.data.data)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

