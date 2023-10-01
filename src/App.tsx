import React from 'react';
import './App.css';
import {NavBar} from './componets/NavBar/NavBar';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {News} from './componets/News/News';
import {Music} from './componets/Music/Music';
import {Settings} from './componets/Settings/Settings';
import {HeaderContainer} from './componets/Header/HeaderContainer';
import Login from './componets/Login/Login';
import ProfileContainer from './componets/Profile/ProfileContainer';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import UsersContainer from './componets/Users/UsersContainer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppRootState} from './redux/redux-store';
import {Preloader} from './componets/common/Preloader/Preloader';


type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}


class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <NavBar/>
                <div className="appWrapperContent">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppRootState) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
