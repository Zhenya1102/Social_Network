import React, {Suspense} from 'react';
import './App.css';
import {NavBar} from './componets/NavBar/NavBar';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {News} from './componets/News/News';
import {Music} from './componets/Music/Music';
import {Settings} from './componets/Settings/Settings';
import {HeaderContainer} from './componets/Header/HeaderContainer';
import Login from './componets/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import {AppRootState} from './redux/redux-store';
import {Preloader} from './componets/common/Preloader/Preloader';
const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./componets/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./componets/Users/UsersContainer'));

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
                        <Route path={'/profile/:userId?'} render={() => <Suspense fallback={<div>Loading...</div>}><ProfileContainer/></Suspense>}/>
                        <Route path={'/dialogs'} render={() => <Suspense fallback={<Preloader/>}><DialogsContainer/></Suspense>}/>
                        <Route path={'/users'} render={() => <Suspense fallback={<Preloader/>}><UsersContainer/></Suspense>}/>
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/music'} render={() => <Music/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404: Not Found</div>}/>
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
